import {Component, OnInit} from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import {InAppBrowser, InAppBrowserOptions} from "@ionic-native/in-app-browser";
import {EditMediaPage} from "../edit-media/edit-media";
import {AngularFireDatabase, AngularFireList} from "angularfire2/database";

/**
 * Generated class for the ViewMediaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-media',
  templateUrl: 'view-media.html',
})
export class ViewMediaPage implements OnInit {
  mediaURL: any;
  userEmail: any;
  userUID: any;
  userPID: any;

  mediaList: AngularFireList<any>;
  medias: any[];
  dataMedia: any;

  options : InAppBrowserOptions = {
    location : 'yes',
    hidden : 'no',
    clearcache : 'yes',
    clearsessioncache : 'yes',
    zoom : 'yes',
    hardwareback : 'yes',
    mediaPlaybackRequiresUserAction : 'no',
    shouldPauseOnSuspend : 'no',
    closebuttoncaption : 'Close',
    disallowoverscroll : 'no',
    toolbar : 'yes',
    enableViewportScale : 'no',
    allowInlineMediaPlayback : 'no',
    presentationstyle : 'pagesheet',
    fullscreen : 'yes',
  };
  constructor(private fDB: AngularFireDatabase, private sanitizer: DomSanitizer, private iAB: InAppBrowser,
              private modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams) {

    this.userEmail = this.navParams.get('email');
    this.userUID = this.navParams.get('uid');
    this.userPID = this.navParams.get('pid');
    this.medias = [];
    this.mediaURL = this.sanitizer.bypassSecurityTrustResourceUrl(this.navParams.get('media').link);
  }

  ngOnInit() {


  }

  ionViewDidLoad() {

    this.dataMedia = this.getMedia(this.userUID, this.userPID);
    this.dataMedia.snapshotChanges().subscribe(item => {
      this.medias = [];
      item.forEach(element => {
        const id = element.key;
        const val = element.payload.val();
        this.medias[id] = val;
      });
      this.mediaURL = this.sanitizer.bypassSecurityTrustResourceUrl(this.medias['link']);
      console.log(this.mediaURL);
    });
  }
  // function that gets media from FDB, using uid, and pid
  getMedia(uid, pid) {
    this.mediaList = this.fDB.list('/users/' + uid + '/posts/' + pid);
    return this.mediaList;
  }
  // function to edit media record 
  editMedia(media) {
    let modal = this.modalCtrl.create(EditMediaPage, {'email': this.userEmail, 'uid': this.userUID, 'media': media});
    modal.present();
  }

  // function that views url with InAppBrowser native feature
  viewExternal(link) {
    let target = "_blank";
    this.iAB.create(link, target, this.options);
  }
}
