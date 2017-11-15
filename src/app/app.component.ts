import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from './../pages/login/login';
import { TabsPage } from './../pages/tabs/tabs';

import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  constructor(ath: AngularFireAuth ,platform: Platform, 
              statusBar: StatusBar, splashScreen: SplashScreen) {

    const authObserver = ath.authState.subscribe( user => {
      if (user) {
          this.rootPage = TabsPage;
          authObserver.unsubscribe();
      } else {
          this.rootPage = LoginPage;
          authObserver.unsubscribe();
      }
    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.show();
    });
  }
}
