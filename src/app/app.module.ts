import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Import your library
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployerFormComponent } from './components/employer-form/employer-form.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AutenticationComponent } from './auth/autentication/autentication.component';
import { NavbarComponent } from './components/navbar/navbar.component';


import { environment } from '../environments/environment.prod';
import { AngularFireModule } from 'angularfire2';
import { PostulantsComponent } from './components/postulants/postulants.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';


@NgModule({
  declarations: [AppComponent, EmployerFormComponent, AutenticationComponent, PostulantsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
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
