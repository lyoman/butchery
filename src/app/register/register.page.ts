/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  loading: any;

  user = {
    password: '',
    cpassword: '',
    email: '',
    phone_number: 0,
    username: '',
    first_name: '',
    last_name: '',
    // user: JSON.parse(localStorage.getItem('user_id')),
    date: new Date()
  };

  constructor(
    private router: Router,
    private authService: AuthService,
    private apiService: ApiService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  login() {
    this.router.navigateByUrl('/login');
  }

  register() {

    if (this.user.password !== this.user.cpassword) {
      this.apiService.presentAlert('Authentication error', 'Your passwords did not match', '');
    }
    else {
      this.loading = true;
      this.authService.register('users/register/', this.user).subscribe((res) => {

        console.log(res);
        this.loading = false;

        this.navCtrl.navigateRoot('login');
        this.apiService.presentAlert('', '', '');

      }, (err) => {
        console.log(err);
        this.loading = false;
        this.apiService.presentAlert(err.message, '', '');
      });
    }
  }
}
