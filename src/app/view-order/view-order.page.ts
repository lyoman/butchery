import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.page.html',
  styleUrls: ['./view-order.page.scss'],
})
export class ViewOrderPage implements OnInit {

  medicine = {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    logo: this.route.snapshot.paramMap.get('logo'),
    butchery: this.route.snapshot.paramMap.get('butchery'),
    location: this.route.snapshot.paramMap.get('location'),
    city: this.route.snapshot.paramMap.get('city'),
    quantity: this.route.snapshot.paramMap.get('quantity'),
    name: this.route.snapshot.paramMap.get('name'),
    phoneNumber: this.route.snapshot.paramMap.get('phoneNumber'),
  };

  // {
  //   dateCreated: new Date(),
  //   logo: 'assets/imgs/butcher-shop.png',
  //   butchery: 'DZ butchery',
  //   location: 'Banket',
  //   city: 'Chinhoyi',
  //   address: '',
  //   latitudte: '',
  //   longitude: '',
  //   distance: '50km',
  //   name: 'pork',
  //   quantity: '60 kgs',
  //   expiryDate: new Date(),
  //   phoneNumber: '+263 775 078 468'
  // },

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    console.log('route', this.route);
  }

}
