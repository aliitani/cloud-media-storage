import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import { User } from "../../models/user";
import { RegisterPage } from "../register/register";
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from "../home/home";
import {FormGroup} from "@angular/forms";


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user =  {} as User;
  loginForm: FormGroup;
  constructor(private alertCtrl: AlertController,
              private AFauth: AngularFireAuth,
              public navCtrl: NavController,
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  // function to login with firebase
  async logIn(user: User) {
    if(user.email !== null && user.password != null) {
      const result = this.AFauth.auth.signInWithEmailAndPassword(user.email, user.password);
      result.then(() => {
        this.navCtrl.setRoot(HomePage);
      }, () => {
        this.showAlert('Incorrect input fields entered.');
        this.navCtrl.setRoot(LoginPage);
      });
    } else {
      this.showAlert('Input fields are required to log in.');
    }

  }

  // function to show an alert to the user
  showAlert(s) {
    let alert = this.alertCtrl.create({
      title: 'Alert',
      subTitle: s,
      buttons: ['OK']
    });
    alert.present();
  }

  // function to register with firebase
  register() {
    this.navCtrl.push(RegisterPage);
  }
}
