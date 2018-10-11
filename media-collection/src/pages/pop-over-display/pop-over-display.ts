import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {AngularFireAuth} from "angularfire2/auth";
import {LoginPage} from "../login/login";

/**
 * Generated class for the PopOverDisplayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pop-over-display',
  templateUrl: 'pop-over-display.html',
})
export class PopOverDisplayPage {

  constructor(
    public viewCtrl: ViewController,
    private AFauth: AngularFireAuth,
    public navCtrl: NavController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopOverDisplayPage');
  }

  // log out from firebase user auth
  logOut() {

    this.viewCtrl.dismiss();

    this.AFauth.auth.signOut().then(() => {
      this.showSuccess();
      this.navCtrl.setRoot(LoginPage);
    }).catch(() => {
      this.showAlert();
    });
  }

  // alert user that sign out didnt go correctly
  showAlert() {
  //  toast
  }
  // show user that sign out went successfully
  showSuccess() {
  //  toast
  }
}
