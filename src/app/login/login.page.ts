import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import jwt_decode from 'jwt-decode';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user = { username: '', password: '' };
  loading: any;

  constructor(
    private router: Router,
    private apiService: ApiService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  login() {
    if (this.user.username === '' || this.user.password === '') {
      this.apiService.presentAlert('Error!', 'Enter username and password!', 'register if you have no account');
    }
    // else {
    //   this.loading = true;
    //   this.authService.login('auth/token/', this.user).subscribe((res) => {

    //     this.token = jwt_decode(res.token);

    //     console.log("this.token",  this.token);
    //     localStorage.setItem('token', JSON.stringify(this.token));
    //     localStorage.setItem('user_id', JSON.stringify(this.token['user_id']));
    //     localStorage.setItem('username', JSON.stringify(this.token['username']));
    //     localStorage.setItem('email', JSON.stringify(this.token['email']));

    //     localStorage.setItem('loggedIn', 'true');
    //     console.log(res);
    //     this.loading = false;
    //     this.navCtrl.navigateRoot('home');

    //   }, (err) => {
    //     this.loading = false;
    //     if(err.error.status == 400){
    //       this.apiService.presentAlert(err.error.non_field_errors[0], '', '');
    //     } else {
    //       this.error = err;
    //     this.apiService.presentAlert(err.message, '', '');
    //     }
    //     console.log(err);
    //   });
    // }
  }

  register() {
    this.router.navigateByUrl('/register');
  }

}
