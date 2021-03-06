import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from "@angular/forms";
import { AuthService } from '../services/auth.service';

import * as firebase from 'firebase';

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent{

  constructor(public auth: AuthService, public router: Router) {}

    loginForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    });


  ngOnInit() {
  }

  login() {
    this.auth.doLogin();
    this.router.navigate(['/']);
  }

  loginEmail(loginForm) {
    this.auth.doLoginEmail(loginForm);
      

  }


}