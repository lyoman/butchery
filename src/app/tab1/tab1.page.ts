import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  searchText: any;
  loading: any;
  medicine = [];

  latitude: any;
  longitude: any;
  address: any;

  country: any;
  city: any;
  province: any;
  location: any;

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

  constructor(
    private appService: ApiService,
    // private nativeGeocoder: NativeGeocoder
  ) { }

  ngOnInit(): void {
    // this.getLocation();
    // this.getMedicine();
  }

  // async getLocation() {
  //   const position = await Geolocation.getCurrentPosition();
  //   this.latitude = position.coords.latitude;
  //   this.longitude = position.coords.longitude;
  //   console.log('position', position);
  //   this.getLocationDetails(position.coords.latitude, position.coords.longitude);
  //   this.getMedicine();
  // }

  // getLocationDetails(latitude, longitude) {
  //   let options: NativeGeocoderOptions = {
  //     useLocale: true,
  //     maxResults: 5
  //     };
  //     this.nativeGeocoder.reverseGeocode(latitude, longitude, options)
  //     .then((result: NativeGeocoderResult[]) => {
  //       console.log(JSON.stringify(result[0]))
  //       this.address = JSON.stringify(result[0]);
  //       this.city = result[0]['locality'];
  //       this.location = result[0]['subLocality'];
  //       this.province = result[0]['administrativeArea'];
  //       this.country = result[0]['countryName'];
  //     }
  //     )
  //     .catch((error: any) => console.log(error));
  // }

  getMedicine() {
    this.loading = true;
    this.appService.MarketGetData('/medicine/').subscribe(
      (data) => {
        this.medicine = data;
        if (data.length === 0) {
          this.appService.presentAlert('', 'There are no medicines in the system yet!', '');
        }
        this.loading = false;
      },
      (err) => {
        this.appService.presentAlert(err.title, 'Failed to retrive data!', 'An error occured while retrieving data');
        this.loading = false;
      }
    );
  }


}
