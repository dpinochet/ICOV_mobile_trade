import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonNav, MenuController, Platform } from '@ionic/angular';
import { BaseServicesService } from './services/base-services.service';
import { ComunicacionComponentService } from './services/comunicacion-component.service';
import { UserServicesService } from './services/user-services.service';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HomePage } from './pages/home/home.page';
import { LoginPage } from './pages/login/login.page';
import { CapacitacionPage } from './pages/capacitacion/capacitacion.page';
import { IncidenciasPage } from './pages/incidencias/incidencias.page';
import { MetasPage } from './pages/metas/metas.page';
import { Geolocation } from '@capacitor/geolocation';
import { Storage } from '@capacitor/storage';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {


  //@ViewChild(Nav) nav: Nav;
  @ViewChild(IonNav) nav: IonNav;
  private menu: MenuController;
  public rootPage;
  pages: Array< { title: string, icon: string, component: any } >;

  Geolocation1=null;
  menutwo=false;
  user:any=null;
  constructor(
    private platform:Platform,
    private statusBar:StatusBar,
    private auth:BaseServicesService,
    menu:MenuController,
    private _auth:UserServicesService,
    private _comun:ComunicacionComponentService,
    private router:Router
    
  ) {

    // this.storage.set('base_url', 'https://redamigos.herokuapp.com/');
    //this.storage.set('base_url', 'https://vm-icov-003.riosoft.cl/');
    this.setStorage('base_url', 'https://vm-icov-003.riosoft.cl/')
    // this.storage.set('base_url', 'http://192.168.100.9:8001/');

    // this.storage.set('base_url', 'http://192.168.100.7:8000/');
    // this.storage.set('base_url', 'http://192.168.100.13:8000/');

    //this.storage.set('subsidiary', 'null');
    this.setStorage('subsidiary', 'null')
   // this.storage.set('idSubsidiary', 'null');
    this.setStorage('idSubsidiary', 'null')
    this.get();
    //this.ready();
  
    this.pages = [
     
      { title: 'Ventas o rutas', icon: "map", component: 'home' }, 
      // { title: 'Punto de Venta', icon: 'locate', component: StoresPage },
      { title: 'Capacitación', icon: 'chatbubbles', component: 'capacitacion' },
      // { title: 'Incidencias', icon: 'chatbubbles', component: IncidentsPage },
      //{ title: 'Metas',icon:'locate', component: StoresPage},
      // { title: 'Reportes', icon: 'list-box', component: ReportPage },
      
      { title: 'Incidencias', icon: "alert-circle", component: 'incidencias' },
      { title:'Metas', icon:'medal' , component:'metas'}
      // { title: 'Reposiciones', icon: 'chatbubbles', component: VisitsPage }//,
      // { title: 'Visitas', icon: 'list-box', component: TestViewModelPage },
      // { title: 'BG socket', icon: 'locate', component: BackgroundConsumerPage },
    ];
    this.menu = menu;
    // firebase.initializeApp(ENV.firebase);
  
    Geolocation.getCurrentPosition().then((geo)=>{
      this.Geolocation1={lat:geo.coords.latitude,lng:geo.coords.longitude};
    },error=>{
      console.log('error-ubicacion: ',error);
    });

    /**
     * get-data-user
     * 
     */



     this._comun.itemComunicacion.subscribe((comunic:any)=>{
       if(comunic.name==='update-data-user'){
         this.getDataUser();
       }
     });

    if(this.auth.isLoggingIn())
    {
      this.router.navigateByUrl('home');
    }



  }

  async ready()
  {
    await this.platform.ready().then(() => {
    
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
     // splashScreen.hide();
      this.rootPage = this.auth.isLoggingIn() ? HomePage : LoginPage;
    });
    console.log("hermosa");
    // this.backgroundMode.enable();
    // this.backgroundMode.excludeFromTaskList();
    // this.backgroundMode.on('enable').subscribe(event=>{
    //     console.log('backgroundmode enable: ',event);
    // })

    // this.backgroundMode.on('disable').subscribe(event=>{
    //   console.log('backgroundmode disable: ',event);
    // })

    // this.backgroundMode.on('activate').subscribe(event=>{
    //   console.log('backgroundmode activate: ',event);
    //   this._comun.addItem({name:'notificacioneEnable',state:true});
    // })

    // this.backgroundMode.on('deactivate').subscribe(event=>{
    //   console.log('backgroundmode deactivate: ',event);
    //   this._comun.addItem({name:'notificacioneEnable',state:false});
    // })

    // this.backgroundMode.on('failure').subscribe(event=>{
    //   console.log('backgroundmode failure: ',event);
    // })
 



    
  }
  async get()
  {
    const  {value}  = await Storage.get({key: 'base_url'});
    console.log("url ",value)
  }
  async setStorage(k,v)
  {
    
      await Storage.set({
        key: k,
        value:v,
      });
    
  }
  logout(): void {
    this.menu.close();
    this.auth.logout();
    //this.nav.push(LoginPage);
    this.router.navigateByUrl('login');
    Storage.clear();
    localStorage.clear();
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
   // this.nav.setRoot(page.component);
   
    this.router.navigateByUrl(page.component);
  }

  getDataUser(){
    setTimeout(()=>{

      let user_data= this._auth.getUser();
      this.user=user_data[0];
      console.log('user-data: ',user_data);
    },2000);
  }

}
