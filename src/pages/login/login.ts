import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(private ath: AngularFireAuth,
              public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  async loginGoogle() {
    this.ath.auth
    .signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.log(error);
    });
  }

  async loginFacebook() {
    this.ath.auth
    .signInWithPopup(new firebase.auth.FacebookAuthProvider())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.log(error);
    });
  }
}
