import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  loginData: any;

  constructor(public formBuilder: FormBuilder, private navController: NavController) { }

  ngOnInit() {
    this.initialize();
  }

  initialize() {
    this.loginForm = this.formBuilder.group({
      name: [''],
      password: ['']
    });
  }

  login() {
    this.navController.navigateRoot('/profile');
    console.log(this.loginForm.value)
  }

}
