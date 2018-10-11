import {Component, OnInit} from '@angular/core';
import {
  AlertController,
  ModalController,
  NavController,
  NavParams,
  PopoverController,
  ToastController
} from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";
import {LoginPage} from "../login/login";
import { AddMediaPage } from "../add-media/add-media";
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {ViewMediaPage} from "../view-media/view-media";
import {PopOverDisplayPage} from "../pop-over-display/pop-over-display";
import {EditMediaPage} from "../edit-media/edit-media";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage implements OnInit {
  // declaration of variables needed
  userEmail: string;
  userUID: string;
  dataMedia: any;
  mediaList: AngularFireList<any>;
  medias: any[];

  listView: boolean;
  gridView: boolean;
  viewMode: string;

  constructor(public alertCtrl: AlertController,
              public toastCtrl: ToastController,
              public popoverCtrl: PopoverController,
              private fDB: AngularFireDatabase,
              public modalCtrl: ModalController,
              private AFauth: AngularFireAuth,
              public navCtrl: NavController,
              public navParams: NavParams) {
    this.medias = [];
  }

  ngOnInit() {
    this.listView = true;
    this.gridView = false;
    this.viewMode = (this.listView) ? "<ion-icon name='grid'></ion-icon>Grid Mode" : "<ion-icon name='list'></ion-icon>List Mode";

    if (this.navParams.get('list') || this.navParams.get('grid')) {
      this.listView = this.navParams.get('list');
      this.gridView = this.navParams.get('grid');
      this.viewMode = (this.listView) ? "<ion-icon name='grid'></ion-icon>Grid Mode" : "<ion-icon name='list'></ion-icon>List Mode";
    }

  }

  ionViewWillLoad() {

    this.AFauth.authState.subscribe(data => {
      if (data && data.email && data.uid) {
        this.userEmail = data.email;
        this.userUID = data.uid;

        this.dataMedia = this.getMedia(this.userUID);
        this.dataMedia.snapshotChanges().subscribe(item => {
          this.medias = [];
          item.forEach(element => {
            this.medias.push(element.payload.val());
          });
          console.log(this.medias);
        });
      } else {
        this.navCtrl.setRoot(LoginPage);
      }
    });
  }

  // function to switch between list or grid
  switch() {
    this.gridView = !this.gridView;
    this.listView = !this.listView;
    this.viewMode = (this.listView) ? "<ion-icon name='grid'></ion-icon>Grid Mode" : "<ion-icon name='list'></ion-icon>List Mode";
  }

  // view a specific media in detail
  viewMedia(media) {
    this.navCtrl.push(ViewMediaPage, {'media': media, 'email': this.userEmail, 'uid': this.userUID, 'pid': media.id});
  }

  // function to add new media using Ionic Modal
  addMedia() {
    let modal = this.modalCtrl.create(AddMediaPage, {'email': this.userEmail, 'uid': this.userUID});
    modal.present();
  }

  // function that fetches media from firebase DB
  getMedia(uid) {
    this.mediaList = this.fDB.list('/users/' + uid + '/posts/');
    return this.mediaList;
  }

  // popover for several options
  presentPopover(myEvent) {
    let popOver = this.popoverCtrl.create(PopOverDisplayPage);
    popOver.present({
      ev: myEvent
    });
  }

  // function allows user to delete a certain media record 
  deleteMedia(media) {
    const posts = this.fDB.list('/users/' + this.userUID + '/posts');
    let confirmation = this.alertCtrl.create({
      title: 'Conform Delete!',
      message: 'Are you sure you want to delete ' + media.title,
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            this.showToast('Media was not deleted');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            posts.remove(media.id).then(() => {
              this.showToast('Deleted media: ' + media.title);

            }).catch(() => {
              this.showToast('Deletion went wrong?!');
            });
          }
        }
      ]
    });
    confirmation.present();
  }
  // function that allows the user to edit a media record, uses a Modal
  editMedia(media) {
    let modal = this.modalCtrl.create(EditMediaPage, {'email': this.userEmail, 'uid': this.userUID, 'media': media});
    modal.present();
  }

  // function that shows a toast to the user with an assigned message
  showToast(s) {
    const toast = this.toastCtrl.create({
      message: s,
      position: 'bottom',
      duration: 1500
    });
    toast.present();
  }

}
