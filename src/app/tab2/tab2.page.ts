import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  searchText: any;
  loading: any;

  ordersList = [
    {
      dateCreated: new Date(),
      logo: 'assets/imgs/butcher-shop.png',
      butchery: 'Fairprice butchery',
      location: 'Banket',
      city: 'Chinhoyi',
      address: '',
      latitudte: '',
      longitude: '',
      distance: '50km',
      name: 'beef',
      quantity: '100 kgs',
      expiryDate: new Date(),
      phoneNumber: '+263 775 078 468'
    },
    {
      dateCreated: new Date(),
      logo: 'assets/imgs/butcher.png',
      butchery: 'Super meats butchery',
      location: 'Banket',
      city: 'Chinhoyi',
      address: '',
      latitudte: '',
      longitude: '',
      distance: '50km',
      name: 'goat meat',
      quantity: '70 kgs',
      expiryDate: new Date(),
      phoneNumber: '+263 775 078 468'
    },
    {
      dateCreated: new Date(),
      logo: 'assets/imgs/butchering.png',
      butchery: 'Ritz meats butchery',
      location: 'Banket',
      city: 'Chinhoyi',
      address: '',
      latitudte: '',
      longitude: '',
      distance: '50km',
      name: 'chicken',
      quantity: '80 kgs',
      expiryDate: new Date(),
      phoneNumber: '+263 775 078 468'
    },
    {
      dateCreated: new Date(),
      logo: 'assets/imgs/ham.png',
      butchery: 'Kelvin corner butchery',
      location: 'Banket',
      city: 'Chinhoyi',
      address: '',
      latitudte: '',
      longitude: '',
      distance: '50km',
      name: 'beef',
      quantity: '200 kgs',
      expiryDate: new Date(),
      phoneNumber: '+263 775 078 468'
    },
    {
      dateCreated: new Date(),
      logo: 'assets/imgs/butcher-shop.png',
      butchery: 'DZ butchery',
      location: 'Banket',
      city: 'Chinhoyi',
      address: '',
      latitudte: '',
      longitude: '',
      distance: '50km',
      name: 'pork',
      quantity: '60 kgs',
      expiryDate: new Date(),
      phoneNumber: '+263 775 078 468'
    },
  ];

  constructor() {}

}
