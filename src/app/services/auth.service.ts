/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly baseUrl:  string  =  environment.baseUrl;
  // AUTH_SERVER_ADDRESS:  string  =  'http://localhost:8000/api/';

  constructor(private httpClient: HttpClient) { }

  login(url, userData): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}${url}`, userData, { headers: { 'Content-Type': 'application/json' } });
  }

  register(url, userData): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}${url}`, userData, { headers: { 'Content-Type': 'application/json' } });
  }
}
