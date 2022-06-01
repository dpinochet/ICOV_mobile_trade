import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NavController,IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-modal-img-preview',
  templateUrl: './modal-img-preview.page.html',
  styleUrls: ['./modal-img-preview.page.scss'],
})
export class ModalImgPreviewPage implements OnInit {

  
  @Input() imagenes: any;
  

  @ViewChild('slides') slides: IonSlides;
  dataImg=null;
  constructor(public navCtrl: NavController) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalImgPreviewPage');
  }

  ngOnInit() {
    this.dataImg= this.imagenes;
    console.log('parametros: ', this.imagenes);
  }


  close(){
    this.navCtrl.pop();
  }

  next() {
    this.slides.slideNext();
  }

  prev() {
    this.slides.slidePrev();
  }


}
