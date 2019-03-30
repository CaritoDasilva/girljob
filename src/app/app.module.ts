import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Import your library
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // Specify the ngx-auth-firebaseui library as an import
    NgxAuthFirebaseUIModule.forRoot({
      apiKey: 'AIzaSyBM7Ue0pHRYImLt0v0JYjLmr2oQAswDEts',
      authDomain: 'girljob.firebaseapp.com',
      databaseURL: 'https://girljob.firebaseio.com',
      projectId: 'girljob',
      storageBucket: 'girljob.appspot.com',
      messagingSenderId: '1056645454793'
    }),
      ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}