import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams, ToastController, ViewController} from 'ionic-angular';
import {AngularFireDatabase} from "angularfire2/database";

/**
 * Generated class for the EditMediaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-media',
  templateUrl: 'edit-media.html',
})
export class EditMediaPage {
  media: any;
  setTitle: string;
  setDescription: string;
  setThumbnail: string;
  setLink: string;
  setID: string;
  userUID: string;

  constructor(public toastCtrl: ToastController,
              public alertCtrl: AlertController,
              public fDB: AngularFireDatabase,
              public viewCtrl: ViewController,
              public navCtrl: NavController,
              public navParams: NavParams) {

    this.media = this.navParams.get('media');
    this.setTitle = this.media.title;
    this.setDescription = this.media.description;
    this.setLink = this.media.link;
    this.setThumbnail = this.media.thumbnail;
    this.setID = this.media.id;
    this.userUID = this.navParams.get('uid');
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditMediaPage');
  }

  // function that updates media
  updateMedia() {
    const media = this.fDB.list('/users/' + this.userUID + '/posts');

    const checkUpdate = this.alertCtrl.create( {
      title: 'Update Media',
      message: 'Are you sure you want to update?',
      buttons: [
        {
          text: 'No',
          handler: () => {
            this.viewCtrl.dismiss();
            this.showAlert('Nothing was updated');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            console.log(this.setID, this.setTitle, this.setThumbnail, this.setLink, this.setDescription);
            media.update(this.setID, {
              'id': this.setID,
              'title': this.setTitle,
              'description' : this.setDescription,
              'link': this.setLink,
              'thumbnail': this.setThumbnail
            }).then(() => {
                this.showAlert('Done Updating');
                this.viewCtrl.dismiss();

              }).catch(() => {
                this.showAlert('Something went wrong');
                this.viewCtrl.dismiss();
            });
          }
        }
      ]
    });

    checkUpdate.present();
  }
  // function that alerts the user with an assigned message 
  showAlert(s) {
    const toast = this.toastCtrl.create({
      message: s,
      position: 'bottom',
      duration: 1500
    });
    toast.present();
  }

  // function that cancels update if users decides to not update media
  cancelUpdate() {
    this.viewCtrl.dismiss();
    this.showAlert('Nothing was updated');
  }
}
