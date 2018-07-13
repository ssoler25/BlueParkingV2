import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Geolocation } from '@ionic-native/geolocation';
import {Diagnostic} from '@ionic-native/diagnostic';
import { GeolocationPage } from '../pages/geolocation/geolocation';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { BdBluePage } from '../pages/bd-blue/bd-blue';

export const firebaseConfig = {
  apiKey: "AIzaSyCkWCMNZ7mmciaB_ZdNpKqov4BTGrl6eHw",
    authDomain: "nuevo-57a3b.firebaseapp.com",
    databaseURL: "https://nuevo-57a3b.firebaseio.com",
    projectId: "nuevo-57a3b",
    storageBucket: "nuevo-57a3b.appspot.com",
    messagingSenderId: "966989978852"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    GeolocationPage,
    BdBluePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    GeolocationPage,
    BdBluePage
  ],
  providers: [
    AngularFireDatabase,
    StatusBar,
    SplashScreen,
    Geolocation,
    Diagnostic,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
