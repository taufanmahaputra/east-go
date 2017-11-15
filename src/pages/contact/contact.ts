import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  name: String = '';
  email: String ='';

  constructor(private ath: AngularFireAuth ,public navCtrl: NavController) {
    this.ath.authState.subscribe(res => {
      this.name = res.displayName;
      this.email = res.email;
    });
  }

}
