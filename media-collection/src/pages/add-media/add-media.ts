import {Component, OnInit} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams, ToastController, ViewController} from 'ionic-angular';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {HomePage} from "../home/home";

@IonicPage()
@Component({
  selector: 'page-add-media',
  templateUrl: 'add-media.html',
})
export class AddMediaPage implements OnInit{
  mediaList: AngularFireList<any>;

  userEmail: string;
  userUID: string;

  // could do a model interface for these later.
  setTitle: string;
  setDescription: string;
  setMedia: string; // vid/ photo/ audio
  setThumbnail: string;

  constructor(private toastCtrl: ToastController,
              private alertCtrl: AlertController,
              private viewCtrl: ViewController,
              public navCtrl: NavController,
              public navParams: NavParams,
              private fDB: AngularFireDatabase) {
    this.setThumbnail = '';
  }

  ngOnInit() {
    this.userUID = this.navParams.get('uid');
    this.userEmail = this.navParams.get('email');
  }

  ionViewDidLoad() {
  }
  
  // function that gets media records from user and addes them to a list
  getMedia(id): any {
    this.mediaList = this.fDB.list('/users/' + id + '/posts/');
    return this.mediaList;
  }
  
  // function that allows user to add a new media record to firebase 
  addNewMedia() {
    if (this.setTitle !== undefined && this.setDescription !== undefined && this.setMedia !== undefined) {
      if (this.setThumbnail === '') {
        this.setThumbnail = '../assets/imgs/default.jpg';
        const newKey = this.fDB.list('/users/' + this.userUID + '/posts/').push({});
        newKey.set({
          'id': newKey.key,
          'title': this.setTitle,
          'description': this.setDescription,
          'link': this.setMedia,
          'thumbnail': this.setThumbnail
        });
        this.navCtrl.setRoot(HomePage);
        this.showToast('Media Added');
      } else {
        const newKey = this.fDB.list('/users/' + this.userUID + '/posts/').push({});
        newKey.set({
          'id': newKey.key,
          'title': this.setTitle,
          'description': this.setDescription,
          'link': this.setMedia,
          'thumbnail': this.setThumbnail
        });
        this.navCtrl.setRoot(HomePage);
        this.showToast('Media Added');
      }
    } else {
      this.showAlert('Input field is missing');
    }
  }

  // function shows a toast to user with an assigned message 
  showToast(s) {
    const toast = this.toastCtrl.create({
      message: s,
      position: 'bottom',
      duration: 1500
    });
    toast.present();
  }
  
  // function that shows an alert to the user with an assigned message
  showAlert(s) {
    let alert = this.alertCtrl.create({
      title: 'Alert',
      subTitle: s,
      buttons: ['OK']
    });
    alert.present();
  }
  // function that allows users to cancel adding a media, and nothing gets pushed to the DB
  cancelNewMedia() {
    if(this.setTitle !== null
      && this.setDescription !== null
      && this.setMedia !== null
      && this.setThumbnail !== null) {

      let confirmAlert = this.alertCtrl.create({
        title: 'Form is not saved',
        message: 'Are you sure you want to cancel?',
        buttons: [
          {
            text: 'No',
            handler: () => {

            }
          },
          {
            text: 'Yes',
            role: 'cancel',
            handler: () => {
              this.viewCtrl.dismiss();
            }
          }
        ]
      });

      confirmAlert.present();

    } else {

      this.viewCtrl.dismiss();

    }
  }
}
