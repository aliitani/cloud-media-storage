import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams, ToastController, ViewController} from 'ionic-angular';
import {User} from "../../models/user";
import { AngularFireAuth } from "angularfire2/auth";


@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user =  {} as User;

  constructor(
    private toastCtrl: ToastController,
    private viewCtrl: ViewController,
    private alertCtrl: AlertController,
    private AFauth: AngularFireAuth,
    public navCtrl: NavController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  // function to register with with firebase
  async register(user: User) {
    if (user.email !== undefined && user.password !== undefined) {
      const result = this.AFauth.auth.createUserWithEmailAndPassword(user.email, user.password);
      result.then(() => {
        this.showAlert('Done Registration');
        this.navCtrl.popToRoot();
      }, () => {
        this.showAlert('Something went wront in your registration.');
        this.navCtrl.popToRoot();
      });
    } else {
      this.showAlert('Input fields are required');
    }
  }
  // function that alerts the user with an assigned message.
  showAlert(s) {
    let alert = this.alertCtrl.create({
      title: 'Alert',
      subTitle: s,
      buttons: ['OK']
    });
    alert.present();
  }
  // function to show a toast to a user with an assigned message
  showToast(s) {
    const toast = this.toastCtrl.create({
      message: s,
      position: 'bottom',
      duration: 1500
    });
    toast.present();
  }
  // function allows user to cancel the registration process, goes back to the prev view
  cancelRegisteration() {
    this.viewCtrl.dismiss();
    this.showToast('Registration canceled.');
  }
}
