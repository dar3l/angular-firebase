import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

// FireBase Imports
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD8E-zvN4Wmu-Q1EpYRysqLbPeIaP0mROU",
  authDomain: "angular-firebase-1195b.firebaseapp.com",
  databaseURL: "https://angular-firebase-1195b.firebaseio.com",
  projectId: "angular-firebase-1195b",
  storageBucket: "angular-firebase-1195b.appspot.com",
  messagingSenderId: "267385356755",
  appId: "1:267385356755:web:d6b5f0f50556ddf9"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //Initialize Firebase
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule // storage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
