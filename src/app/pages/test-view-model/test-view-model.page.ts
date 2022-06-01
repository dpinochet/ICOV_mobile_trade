import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { from } from 'rxjs';
import { groupBy, mergeMap, toArray } from 'rxjs/operators';
import { DeliveryServicesService } from 'src/app/services/delivery-services.service';
import { UserServicesService } from 'src/app/services/user-services.service';
import { Store } from '../../models/store';

@Component({
  selector: 'app-test-view-model',
  templateUrl: './test-view-model.page.html',
  styleUrls: ['./test-view-model.page.scss'],
})
export class TestViewModelPage implements OnInit {


  ngOnInit() {
  }

  testArray: any = [];
  public date_start: any = '';
  private allStores: any = [];
  public arrayGrouped = [];

  constructor(
    public navCtrl:   NavController,
    public userSrvc:  UserServicesService,
    private delivery:   DeliveryServicesService

  ) { } // End constructor


  callSubmit(){this.obtainTrades()}

  obtainTrades() {
    let date = this.date_start
    let arraySubsidiaries = [];
    this.arrayGrouped = [];

    this.delivery.getStoresCatalog().subscribe(
      data => {
        const distinct = (value,index, self) => { return self.indexOf(value) === index }
        this.allStores = data;
        this.delivery.getVisitsByUserDay(date).subscribe(
          data => {
            let trade = data
            const source = from(trade);
            const for_group = source.pipe(
              groupBy( (trade:Store) => trade.id_multistore),
              mergeMap(group => group.pipe(toArray()))
            );

            const subscribe = for_group.subscribe(val => {
              arraySubsidiaries[val[0].id_multistore] = val;
            });
            for (let key in arraySubsidiaries) {
              let store_tmp = this.allStores.find(x=>x.id == key);
              let unique = [...Array.from(arraySubsidiaries[key].map(item => item.name_business))]
              unique = unique.filter(distinct)
              let subsidiary_cont: any = [];

              for (let item in unique) {
                subsidiary_cont.push(unique[item])
                for (let subsidiary of arraySubsidiaries[key]) {
                  if(subsidiary.name_business == unique[item]){ subsidiary_cont[item] =+1 }
                }
              }
              this.arrayGrouped[parseInt(key)-1] = arraySubsidiaries[key]
              this.arrayGrouped[parseInt(key)-1]['img'] = store_tmp.photo
              this.arrayGrouped[parseInt(key)-1]['name'] = store_tmp.name
              this.arrayGrouped[parseInt(key)-1]['trade_number'] = subsidiary_cont

            }
          },
          _err => { console.error(_err)}
        )
      },
      _err => {}
    )
  }

  pushArray(){
    this.testArray.push('dasdasda')
    console.log(this.testArray)
  }

}
