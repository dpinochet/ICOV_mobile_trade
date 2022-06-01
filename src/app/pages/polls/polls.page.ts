import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { PollServicesService } from 'src/app/services/poll-services.service';
import { Storage } from '@capacitor/storage';
 
@Component({
  selector: 'app-polls',
  templateUrl: './polls.page.html',
  styleUrls: ['./polls.page.scss'],
})
export class PollsPage implements OnInit {



  ngOnInit() {
  }

  id_subsidiary: string = 'null';
  polls_list: any;
  items = [];
  checkbox_array = [];


  constructor(
    public navCtrl:       NavController,
   // private storage:      Storage,
    public pollService:   PollServicesService,
    public toastCtrl:     ToastController

  ) {

  }

  ionViewWillEnter() {
    // console.log('entré');
    this.polls_list = [];
    /*this.storage.get('idSubsidiary').then((val) => {
      this.id_subsidiary = val;
    }).then(() => {
      if (this.id_subsidiary != 'null') {
        this.getPolls();
      }
    });*/
    this.getidSub();

  }

  async getidSub()
  {
     await Storage.get({ key: 'idSubsidiary'}).then((val) => {
      this.id_subsidiary = val.value;
    }).then(() => {
      if (this.id_subsidiary != 'null') {
        this.getPolls();
      }
    });
    
  }


  getPolls() {
    // console.log('get polls load');
    this.polls_list = []
    this.items = []
    this.pollService.getCurrentPolls().subscribe(
      rs => {
        this.polls_list = rs;
        for (let i = 0; i < this.polls_list.length; i++) {
          let checked: boolean = false;
          this.items.push({
            question: this.polls_list[i].description,
            ischecked: checked,
            question_id: this.polls_list[i].id
          });
        }
      },
      er => {
        alert(er);
      });
  }

  async answerPolls()
  {
    for (let answer of this.items) {
      let responseObject = {
        "poll_id":        answer.question_id,
        "subsidiary_id":  this.id_subsidiary,
        "answer":         answer.ischecked,
        "is_answer":      true
      }
      this.pollService.responsePoll(responseObject).subscribe(
        rs => {
          console.log('pregunta respondida');
          console.log(rs);
        },
        er => {
          alert(er);
        });
    }
    let toast = await this.toastCtrl.create({
      message: 'La encuesta ha sido respondida con éxito',
      duration: 2500
    });
    toast.present();
    //this.navCtrl.parent.select(0);


  }



}
