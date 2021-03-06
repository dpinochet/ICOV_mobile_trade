import { Component, Input, OnInit } from '@angular/core';

//import { Storage } from '@ionic/storage';
import { Storage } from '@capacitor/storage';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { FormControl, FormGroup } from '@angular/forms';
//import { Camera } from '@ionic-native/camera/ngx';
//import { Camera } from '@capacitor/camera';
declare var _:any;
import * as moment from 'moment';
import { AlertController, ModalController, NavController } from '@ionic/angular';
import { B2bService } from 'src/app/services/b2b.service';
import { UserServicesService } from 'src/app/services/user-services.service';
import { DeliveryServicesService } from 'src/app/services/delivery-services.service';
import { ComunicacionComponentService } from 'src/app/services/comunicacion-component.service';
import { Camera, CameraResultType,CameraSource } from '@capacitor/camera';
//import { Console } from 'console';


@Component({
  selector: 'app-b2b-view-product',
  templateUrl: './b2b-view-product.page.html',
  styleUrls: ['./b2b-view-product.page.scss'],
})
export class B2bViewProductPage implements OnInit {
  public base64Image: any;
  public lista_stock: any;
  loading = true;
  subsidiary = null;
  direccion_subsidiary_arr: any[] = new Array();
  subsidiary_b2_mobile_data_product_list: any[] = new Array();
  formGroupSearch = new FormGroup({
    search: new FormControl(null)
  })
  categorias_productos: any = new Array();
  subsidiary_last_b2b: any = null;
  data_modal_marca = null;
  user: any;
  baja_stock_info_count = 0;
  allProductList: any[] = new Array();
  temporal_product_item = null;
  @Input() card_item ;
  constructor(public navCtrl: NavController,
    private b2b: B2bService, private barcodeScanner: BarcodeScanner, private modalCtrl: ModalController,
    private _auth: UserServicesService, private deliveryPublish: DeliveryServicesService,
    public alertCtrl: AlertController, private _comunc: ComunicacionComponentService) {
    let user_data = this._auth.getUser();
    this.user = user_data[0];

    //this.data_modal_marca = this.navParams.get('data');
    
    //console.log('data_learning: ', this.data_modal_marca);
    //console.log('data_learning: ', this.card_item);

    // this.formGroupSearch.controls.search.valueChanges.subscribe(async (search: any) => {
    //   if (search === '') {
    //     console.log('search-items-updates');
    //     // this.getListProductSubsidiaryB2BMobile();
    //     this.temporal_product_item = null;
    //     this.categorias_productos = null;
    //     this.categorias_productos = new Array();
    //     await this.getCategoriaProductos();
    //   }
    // })
  } 
  ngOnInit() {
    this.data_modal_marca = this.card_item;
    console.log('data_learning: ', this.card_item);
    setTimeout(() => {
      this.initt();
      //})

    }, 2000);
  }

  parse_fecha_b2b(fecha){
    return moment(fecha).format('YYYY-MM-DD')
  }

async eliminarProducto(sku:string, stock:number) {
  const alert = await this.alertCtrl.create({
    cssClass: 'my-custom-class',
    header: '??Confirma Quitar Producto!',
    message: '??Desea quitar este producto SKU:<strong>' + sku + '</strong>?',
    buttons: [
      {
        text: 'NO',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
          console.log('Confirm Cancel: blah');
        }
      }, {
        text: 'SI',
        handler: () => {
          
          /*
          Quitar Producto
          */
          let envio_stock = {
            code_local: this.subsidiary.all.cod_local,
            cod_local: this.subsidiary.all.cod_local,
            idsku:sku,
            stock:0,
            is_active: false
          }
          let rest_aviso =this.deliveryPublish.actualizaDatos(envio_stock);
          console.log(rest_aviso);
          this.showAlert('Producto Quitado', 'Se ha quitado Producto SKY ' + sku, ['OK']);
          this.getCategoriaProductos();


        }
      }
    ]
  });

  await alert.present();
}


async editaStock(sku:string) {
  console.log("this.subsidiary.id" , this.subsidiary);
  
  const alert = await this.alertCtrl.create({
    cssClass: 'my-custom-class',
    header: 'Actualizar Stock: ',
    inputs: [
      {
        name: 'stock',
        type: 'number',
        placeholder: 'Ingrese nuevo stock'
      },
      
    ],
    buttons: [
      {
        text: 'Cancelar',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Confirm Cancel');
        }
      }, {
        text: 'Guardar',
        handler: data => {
          
          /*
          Enviar Stock
          */
          if (data.stock < 0) {
            this.showAlert("Validaci??n del stock", "El stock no puede ser negativo. Verifique nuevamente", ['OK']);
          }
          else {
          let envio_stock = {
            code_local: this.subsidiary.all.cod_local,
            cod_local: this.subsidiary.all.cod_local,
            idsku:sku,
            stock:data.stock,
            is_active: true
          }
          this.deliveryPublish.actualizaDatos(envio_stock).then((res) => {
            this.showAlert('Actualizaci??n del Stock', 'Se ha enviado Stock', ['OK']);
            this.lista_stock = null;
            this.categorias_productos = null;
            this.initt();
          } );
          
        } // fin validacion stock

        }
      }
    ]
  });

  await alert.present();
}



  async registrarImagenLowStock(producto, cat_pro, prod) {
    console.log('producto-low: ', producto);
    /*this.camera.getPicture(
      {
      saveToPhotoAlbum: false,
      targetWidth: 300,
      targetHeight: 300,
      quality: 100,
      allowEdit: false,
      encodingType: this.camera.EncodingType.PNG,
      sourceType: this.camera.PictureSourceType.CAMERA,
      destinationType: this.camera.DestinationType.DATA_URL,
    }
    
    
    ).then(async (imageData) => {*/
      this.base64Image= await Camera.getPhoto({
        saveToGallery:false,
        width: 300,
        height: 300,
        quality: 100,
        allowEditing: false,
        resultType:CameraResultType.DataUrl,
        source:CameraSource.Camera,
        correctOrientation: true
      })
      let img = this.base64Image.dataUrl;
      let model_lowstockproduc = {
        id_subsidiary: this.subsidiary.id,
        id_product: producto.id,
        product_photo: img,
        user_created: this.user.email
      }

      try {

        let rest_aviso = await this.deliveryPublish.lowstockproduct(model_lowstockproduc);

        console.log('rest_aviso_low_product:', rest_aviso);
        if (rest_aviso != null) {

          // let find_error_key = Object.keys(rest_aviso).indexOf('non_field_errors');
          // if (find_error_key > -1) {
          // } else {

          this.categorias_productos[cat_pro].product[prod].color = '#CCFF90';
          this.baja_stock_info_count = this.baja_stock_info_count + 1;
          // }
          //marcar el producto como registrado
        }

      } catch (e) {

        this.showAlert('Error bajo stock', 'este producto ya se encuentra informado con bajo stock', ['OK']);
      }


      //this.modelPos.controls.picture_business.setValue(this.base64Image);
    //}, error => {

    //});
  }


  async registrarImagenLowStockFilter(producto) {
    console.log('producto-low: ', producto);
  /* this.camera.getPicture({
      saveToPhotoAlbum: false,
      targetWidth: 300,
      targetHeight: 300,
      quality: 100,
      allowEdit: false,
      encodingType: this.camera.EncodingType.PNG,
      sourceType: this.camera.PictureSourceType.CAMERA,
      destinationType: this.camera.DestinationType.DATA_URL,
    }).then(async (imageData) => {*/
      this.base64Image= await Camera.getPhoto({
        saveToGallery:false,
        width: 300,
        height: 300,
        quality: 100,
        allowEditing: false,
        resultType:CameraResultType.DataUrl,
        source:CameraSource.Camera,
        correctOrientation: true
      })

     
      let img = this.base64Image.dataUrl;
      let model_lowstockproduc = {
        id_subsidiary: this.subsidiary.id,
        id_product: producto.id,
        product_photo: img,
        user_created: this.user.email
      }

      try {

        let rest_aviso = await this.deliveryPublish.lowstockproduct(model_lowstockproduc);

        console.log('rest_aviso_low_product:', rest_aviso);
        if (rest_aviso != null) {

          // let find_error_key = Object.keys(rest_aviso).indexOf('non_field_errors');
          // if (find_error_key > -1) {
          // } else {

          this.getCategoriaProductos();
          this.baja_stock_info_count = this.baja_stock_info_count + 1;
          // }
          //marcar el producto como registrado
        }

      } catch (e) {

        this.showAlert('Error bajo stock', 'este producto ya se encuentra informado con bajo stock', ['OK']);
      }


      //this.modelPos.controls.picture_business.setValue(this.base64Image);
    //}, error => {

    //});
  }


  async showAlert(title, subTitle, buttons) {
    const alert = await this.alertCtrl.create({
      //title: title,
      //subTitle: subTitle,
      header: title,
      subHeader: subTitle,
      buttons: buttons
    });
    await  alert.present();
  }





  async getCategoriaProductos() {

    /**
     * obtiene los productos del subisidiary por categoria
     */
    //this.subsidiary.id
    this.categorias_productos = null;
    this.categorias_productos = new Array();
    this.temporal_product_item = null;
    this.allProductList = new Array();
    this.formGroupSearch.reset();
    try {
      this.loading=true;
      console.log('product-valid: ',this.subsidiary.id,' modal',);
      // console.log('dataCategoriaProductos:',{subisidiary_id:this.subsidiary.id,marca:this.data_modal_marca.card_item.id});
      let product_category: any = await this.b2b.getCategoriaProductos(this.subsidiary.id, this.data_modal_marca.id);
      let product_valid:any = await this.deliveryPublish.subsidiaryb2bmobileproducts(this.subsidiary.id,this.data_modal_marca.id);
      console.log('product-valid: ',product_valid);
      this.categorias_productos = product_category;
      console.log('categorias productos: ', this.categorias_productos);
      this.setColorCalifProduct(this.categorias_productos,product_valid);
      this.loading=false;
    } catch (e) {
      console.log('error:', e);
    }
  }




  setColorCalifProduct(category_arr,validArr) {
    try {

      if(validArr.length>0){
          category_arr.forEach((category, idx_category) => {
            category.product.forEach((product, idx_product) => {
              let find_valid_product= _.findIndex(validArr,(o)=>{
                return o.id_product==product.id;
              })

              if(find_valid_product>-1){
                this.categorias_productos[idx_category].product[idx_product].color = '#CCFF90';
              }else{
                this.categorias_productos[idx_category].product[idx_product].color = '#FCE4EC';
              }
            
    
            });
          });
    
      }else{
        category_arr.forEach((category, idx_category) => {
          category.product.forEach((product, idx_product) => {
         
              if (product.stock <= 5) {
                this.categorias_productos[idx_category].product[idx_product].color = '#FCE4EC';
              }

            
  
          });
        });
      }

    } catch (e) {
      console.log('error setColorCalifProduct: ', e);
    }
  }


  async obtenerStock() {
    
    try {    
      this.lista_stock = await this.deliveryPublish.getStock(this.subsidiary.all.cod_local);
      

      console.log(this.lista_stock);
    } catch (e) {
      console.log('error actualizaStock: ', e);
    }
  }

  async getStock2() {
    
          let sku:any;
          await this.categorias_productos.forEach((category, idx_category) => {
            category.product.forEach((product, idx_product) => {
             
                sku = this.categorias_productos[idx_category].product[idx_product].idsku;
                 this.getStock(sku).then(res =>{
                  this.categorias_productos[idx_category].product[idx_product].stock = res
                } );
            
            
    
            });
          });
    
      
  }

  



    getStock(sku:number): Promise<any> {

    return new Promise<any>(resolve => {
      

      let lista_stock: any = null;
      let stock_final:number;
      let s1:number = sku;
      let s2:number;
      let stock:any = [];
      lista_stock = this.lista_stock;
      
       // console.log("Inicio rutina:");
      
        lista_stock.forEach((info, idx_category) => {
          s2 = info.idsku;
          if (s1 === s2) {
            stock.push(info.stock);
           // console.log("Encontr?? SKU Stock", info);
          }
          else {
          //  console.log("array: " + info.idsku +  " Parametro: " + s1); 
          }
        });
        stock_final = stock[stock.length -1];
        resolve(stock_final);


        });



  }


 ionViewDidLoad() {

    setTimeout(() => {
      this.initt();
      //})
    }, 2000);


  }

  async initt()
  {
    console.log('ionViewDidLoad BeToBePage');

      this.loading = true;
  
    const  value  = await Storage.get({ key: 'subsidiary'});
   
     // this.storage.get('subsidiary').then(async (subsidiary: any) => {
        this.subsidiary = JSON.parse(value.value);
 
        // await this.getListProductSubsidiaryB2BMobile();
        await this.obtenerStock();
       
        await this.getCategoriaProductos();
        await this.getLastB2bSubsiduary();
        await this.getStock2();
        //console.log('getSubsidiary: ', this.subsidiary);
        this.loading = false;
  }

  async getLastB2bSubsiduary() {
    try {

      this.subsidiary_last_b2b = await this.b2b.getLastB2bSubsidiary(this.subsidiary.id);

    } catch (e) {

    }
  }


  async buscarProducto() {
    // this.temporal_product_item = null;
    // this.allProductList = new Array();
    // await this.getCategoriaProductos();

    this.barcodeScanner.scan().then(async (barcodeData) => {
      if (barcodeData.text === "") {
        this.temporal_product_item = null;
        this.allProductList = new Array();
        await this.getCategoriaProductos();
      } else {

        await this.setProductListAll();

        console.log('temporal_product_item: ',this.temporal_product_item);
        this.formGroupSearch.controls.search.setValue(barcodeData.text);
        this.temporal_product_item = this.filterItems(barcodeData.text);

        // this.categorias_productos=null;
        // this.categorias_productos=new Array();
      }
      console.log('Barcode data', barcodeData);
    }).catch(err => {
      console.log('Error', err);
    });
  }

  async setProductListAll() {
    this.categorias_productos.forEach((category) => {
      category.product.forEach(producto => {
        this.allProductList.push(producto);
        console.log('producto_item: ',producto);
      });
    });
    return true;
  }


  filterItems(searchTerm) {
    return this.allProductList.filter((item) => {
      return item.idsku.toLowerCase().indexOf(
        searchTerm.toLowerCase()) > -1;
    });
  }


  async getListProductSubsidiaryB2BMobile() {

    /**
     * Obtiene la lista de productos en b2b
     */

    let subsidiary_b2_mobile_data_product: any = await this.b2b.getsubsidiaryB2bMobile(this.subsidiary.id);
    this.subsidiary_b2_mobile_data_product_list = subsidiary_b2_mobile_data_product;
    this.cortar_string(this.subsidiary.all.address);
    console.log('b2b_product: ', subsidiary_b2_mobile_data_product);

  }


  cortar_string(value: string) {
    try {
      console.log('corta_string: ', value.split(','));
      this.direccion_subsidiary_arr = value.split(',');

    } catch (e) { }
  }

  goBack() {
    //this.navCtrl.pop();
    this.modalCtrl.dismiss({
      'dismissed': true
    });
    this._comunc.addItem({ name: 'low-stock-count', itemAdd: { count: this.baja_stock_info_count } });

  }


}
