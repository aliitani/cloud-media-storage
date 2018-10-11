import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { FormsModule } from "@angular/forms";
import { AngularFireModule } from "angularfire2";
import { AngularFireAuthModule } from "angularfire2/auth";
import { firebaseConfig } from "./app.firebaseConfig";
import { AngularFireDatabaseModule} from "angularfire2/database";

import { MyApp } from './app.component';
import { LoginPage } from "../pages/login/login";
import { RegisterPage } from "../pages/register/register";
import { HomePage } from "../pages/home/home";
import { AddMediaPage } from "../pages/add-media/add-media";
import { ViewMediaPage } from '../pages/view-media/view-media';
import { PopOverDisplayPage } from '../pages/pop-over-display/pop-over-display';
import {EditMediaPage} from "../pages/edit-media/edit-media";
import { InAppBrowser } from "@ionic-native/in-app-browser";

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RegisterPage,
    HomePage,
    AddMediaPage,
    ViewMediaPage,
    PopOverDisplayPage,
    EditMediaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig.fire),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    RegisterPage,
    HomePage,
    AddMediaPage,
    ViewMediaPage,
    PopOverDisplayPage,
    EditMediaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
