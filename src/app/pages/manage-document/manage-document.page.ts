import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-manage-document',
  templateUrl: './manage-document.page.html',
  styleUrls: ['./manage-document.page.scss'],
})
export class ManageDocumentPage implements OnInit {



  

  /**
   * @name form
   * @type {object}
   * @public
   * @description     Defines an object for handling form validation
   */
   public form: any;

   /**
    * @name records
    * @type {object}
    * @public
    * @description     Defines an object for returning documents from Cloud Firestore database
    */
   public records: any;
 
 
   /**
    * @name city
    * @type {string}
    * @public
    * @description     Model for city form field
    */
   public mensaje: string = '';
   public id_receptor: string = '';
   public id_emisor: string = '';
   public visto: string = '';
 
   //  * @name population
   //  * @type {string}
   //  * @public
   //  * @description     Model for population form field
   //  */
   // public receptor: string = '';
 
   /**
    * @name established
    * @type {string}
    * @public
    * @description     Model for established form field
    */
   public type: string = '';
 
   /**
    * @name docID
    * @type {string}
    * @public
    * @description     property that stores an edited document's ID
    */
   public docID: string = '';
 
   /**
    * @name isEditable
    * @type {boolean}
    * @public
    * @description     property that stores value to signify whether
    * we are editing an existing document or not
    */
   public isEditable: boolean = false;
 
   /**
    * @name title
    * @type {string}
    * @public
    * @description     property that defines the template title value
    */
   public title: string = 'Add a new document';
 
   /**
    * @name _COLL
    * @type {string}
    * @private
    * @description     property that stores the value for the database collection
    */
   private _COLL: string = "Britain";
 
 
   constructor(public navCtrl: NavController,
   
     private _FB: FormBuilder,
     private _DB: DatabaseService,
     private _ALERT: AlertController) {
 
     // Use Formbuilder API to create a FormGroup object
     // that will be used to programmatically control the
     // form / form fields in the component template
     this.form = _FB.group({
       'message': ['', Validators.required]
       //  'name' 	        : ['', Validators.required],
       //  'type'	        : ['', Validators.required]
     });
 
 
     // If we have navigation parameters then we need to
     // parse these as we know these will be used for
     // editing an existing record
    /* if (params.get('isEdited')) {
       let record = params.get('record');
 
       this.mensaje = record.location.mensaje;
       this.id_receptor = record.location.id_receptor;
       this.id_emisor = record.location.id_emisor;
       this.visto = record.location.visto;
       this.isEditable = true;
       this.title = 'Update this document';
     }*/
   }

   ngOnInit() {
  }
 
   /**
    * Saves form data as newly added/edited record within Firebase Realtime
    * database and handles uploading of media asset to Firebase Storage
    *
    * @public
    * @method saveDocument
    * @param  val          {any}              Form data
    * @return {none}
    */
   saveDocument(val: any): void {
     let mensaje: string = this.form.controls["message"].value,
       //  name        : string 		= this.form.controls["name"].value,
       id_receptor: string = 'webmaster',
       id_emisor: string = 'contacto',
       visto: boolean = false
     // type       : string		= this.form.controls["type"].value;
     // type: string = 'test';
 
 
     // If we are editing an existing record then handle this scenario
     if (this.isEditable) {
 
       // Call the DatabaseProvider service and pass/format the data for use
       // with the updateDocument method
       this._DB.updateDocument(this._COLL,
         this.docID,
         {
           mensaje: mensaje,
           id_receptor: id_receptor,
           id_emisor: id_emisor,
           visto: visto
         })
         .then((data) => {
           this.clearForm();
           this.displayAlert('Record added', 'id receptor:' + id_receptor + 'id emisor:' + id_emisor + 'mensaje:' + mensaje);
         })
         .catch((error) => {
           this.displayAlert('Updating document failed', error.message);
         });
     }
 
     // Otherwise we are adding a new record
     else {
 
       // Call the DatabaseProvider service and pass/format the data for use
       // with the addDocument method
       this._DB.addDocument(this._COLL,
         {
           mensaje: mensaje,
           id_receptor: id_receptor,
           id_emisor: id_emisor,
           visto: visto
         })
         .then((data) => {
           this.clearForm();
           this.displayAlert('Record added', 'id receptor:' + id_receptor + 'id emisor:' + id_emisor + 'mensaje:' + mensaje);
         })
         .catch((error) => {
           this.displayAlert('Adding document failed', error.message);
         });
     }
   }
 
   /**
    * Provide feedback to user after an operation has succeeded/failed
    *
    * @public
    * @method displayAlert
    * @param  title          {String}           Heading for alert message
    * @param  message        {String}           Content for alert message
    * @return {none}
    */
   displayAlert(title: string,
     message: string): void {
     let alert: any = this._ALERT.create({
       header: title,
       message: message,
       buttons: ['Got it!']
     });
     alert.present();
   }
 
   /**
    * Clear all form data
    *
    * @public
    * @method clearForm
    * @return {none}
    */
   clearForm(): void {
 
     this.mensaje = '';
     this.id_receptor = '';
     this.id_emisor = '';
     this.visto = '';
     // this.type = '';
   }
 

}
