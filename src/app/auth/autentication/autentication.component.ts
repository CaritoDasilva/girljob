import { Component, OnInit } from '@angular/core';
import { AuthProvider } from 'ngx-auth-firebaseui';

@Component({
  selector: 'app-autentication',
  templateUrl: './autentication.component.html',
  styleUrls: ['./autentication.component.css']
})
export class AutenticationComponent implements OnInit {
  providers = AuthProvider;
  constructor() { }

  ngOnInit() {
  }

}
