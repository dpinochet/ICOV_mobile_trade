import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Push, PushObject, PushOptions } from '@ionic-native/push';

@Injectable({
  providedIn: 'root'
})
export class PushNotificationService {

  constructor(public http: HttpClient, private push: Push) {


    this.push.hasPermission()
      .then((res: any) => {

        if (res.isEnabled) {
          console.log('We have permission to send push notifications');
        } else {
          console.log('We do not have permission to send push notifications');
        }

      });
    console.log('Hello PushNotificationProvider Provider');


    this.push.createChannel({
      id: "testchannel1",
      description: "My first test channel",
      // The importance property goes from 1 = Lowest, 2 = Low, 3 = Normal, 4 = High and 5 = Highest.
      importance: 3
    }).then(() => console.log('Channel created'));



    const options: PushOptions = {
      android: {
        senderID:'97244969057'
      },
      ios: {
        alert: 'true',
        badge: true,
        sound: 'false'
      },
      windows: {},
      browser: {
        pushServiceURL: 'wss:vm-icov-003.riosoft.cl/ws/chat/notifications/'
      }
    };

    const pushObject: PushObject = this.push.init(options);


    pushObject.on('message').subscribe((notification: any) => console.log('Received a notification', notification));

    pushObject.on('registration').subscribe((registration: any) => console.log('Device registered', registration));

    pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));
  }

}
