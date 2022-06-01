import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { UserServicesService } from 'src/app/services/user-services.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {



  ngOnInit() {
  }

  form: FormGroup;
  form_password: FormGroup;
  user_token: string = 'null';
  user_uid: string = 'null';

  constructor(public navCtrl: NavController,
    private userService: UserServicesService,
    fb: FormBuilder,
    public toastCtrl: ToastController,
    private route :Router

  ) {


    this.form_password = fb.group({
      // email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      confirmPass: ['', Validators.compose([Validators.required, Validators.minLength(8)])]
    }, { validator: this.checkIfMatchingPasswords('password', 'confirmPass') });

    this.form = fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
    }, );
  }

  checkIfMatchingPasswords(passwordKey: string, passwordConfirmationKey: string) {
    return (group: FormGroup) => {
      let passwordInput = group.controls[passwordKey],
        passwordConfirmationInput = group.controls[passwordConfirmationKey];
      if (passwordInput.value !== passwordConfirmationInput.value) {
        return passwordConfirmationInput.setErrors({ notEquivalent: true })
      }
      else {
        return passwordConfirmationInput.setErrors(null);
      }
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResetPasswordPage');
  }

  resetPassword() {
    let form = this.form.value;
    let form_data = new FormData;
    form_data.append('email', form.email);

    this.userService.reset_password(form_data).subscribe(
      data => {
        /*let toast = this.toastCtrl.create({
          message: 'Tu email es válido, cambia tu contraseña',
          showCloseButton: true,
          closeButtonText: 'Ok'
        });
        toast.present();*/
        this.tostFound('Tu correo es válido, cambia tu contraseña');
        this.user_token = data.token;
        this.user_uid = data.uid;

      },
      error => {
       /* let toast = this.toastCtrl.create({
          message: 'Tu email es no se encuentra registrado',
          showCloseButton: true,
          closeButtonText: 'Ok'
        });
        toast.present();*/
        this.tostFound('Tu correo es no se encuentra registrado');
        console.log(error);
      }
    )
  }

  confirmPassword() {
    let uid = this.user_uid;
    let token = this.user_token;

    let form = this.form_password.value;
    let form_data = new FormData;
    form_data.append('new_password1', form.password);
    form_data.append('new_password2', form.confirmPass);
    form_data.append('token', token);
    form_data.append('uid', uid);
    // form_data.append('email', form.email);

    this.userService.confirm_password(form_data, uid, token).subscribe(
      data => {
        /*let toast = this.toastCtrl.create({
          message: 'Has cambiado correctamente tu contraseña!',
          showCloseButton: true,
          closeButtonText: 'Ok'
        });
        toast.present();*/
        this.tostFound('¡Has cambiado correctamente tu contraseña!');
        //this.navCtrl.push(LoginPage);
        this.route.navigateByUrl('login');
      },
      error => {
        /*let toast = this.toastCtrl.create({
          message: error.new_password2,
          showCloseButton: true,
          closeButtonText: 'Ok'
        });
        toast.present();*/
        this.tostFound(error.new_password2);
        console.log(JSON.stringify(error));
      }
    )

  }

  async tostFound(msg)
  {
    let toast = await this.toastCtrl.create({
      message:msg,
      buttons: [
         {
          text: 'OK',
          role: 'OK',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    await toast.present();
  }



}
