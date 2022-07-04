import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    { title: 'Home', url: '/tabs', icon: 'home' },
    { title: 'Login / Register', url: '/login', icon: 'person' },
    { title: 'Butcheries', url: '/tabs/tab2', icon: 'paper-plane' },
    { title: 'Contact Us', url: '/contactus', icon: 'mail' },
    { title: 'About Us', url: '/tabs/tab3', icon: 'settings' },
    { title: 'Help', url: '/helpus', icon: 'archive' },
  ];
  constructor(
    private platform: Platform,
    private router: Router,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
    });
  }

  ngOnInit() {

  }

  logout() {
    localStorage.clear();
  }

  navigateP(url){
    this.router.navigateByUrl(url);
  }
}
