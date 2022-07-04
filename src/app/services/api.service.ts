/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { AlertController, Platform } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //  constructor() { }

  address: any = 'https://techpharm.pythonanywhere.com/api';
  address1: any = 'https://edisease.pythonanywhere.com/api';
  readonly baseUrl:  string  =  environment.baseUrl;

  httpOptions = {
    headers: new HttpHeaders({
      Accept: 'text/plain',
      'Content-Type': 'application/json',
    })
  };

  httpPutOptions1 = {
    headers: new HttpHeaders({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      Accept: '*/*'
    })
  };

  httpPutOptions = {
    headers: new HttpHeaders({
      // Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('token') || '{}')

    })
  };

  constructor(
    private httpClient: HttpClient,
    private platform: Platform, private http: HttpClient,
    private artCtrl: AlertController
  ) {

  }

  public portPostData3(url: string, formData: any): Observable<any> {
    return this.httpClient.post(this.baseUrl + url, formData, this.httpPutOptions1);
  }


  public MarketGetData(endPoint: string): Observable<any> {
    return this.http.get(this.baseUrl + endPoint, this.httpPutOptions1);
  }

  public MarketDeleteData(endPoint: string): Observable<any> {
    return this.http.delete(this.baseUrl + endPoint, this.httpOptions);
  }

  public MarketPostData(url: string, formData: any): Observable<any> {
    return this.http.post(this.baseUrl + url, formData, this.httpPutOptions);
  }

  public MarketPutData(url: string, formData: any): Observable<any> {
    return this.http.put(this.baseUrl + url, formData, this.httpPutOptions);
  }

  async presentAlert(err, head, sub) {
    const alert = await this.artCtrl.create({
      header: head,
      subHeader: sub,
      message: err,
      buttons: ['OK']
    });

    await alert.present();
  }

}
