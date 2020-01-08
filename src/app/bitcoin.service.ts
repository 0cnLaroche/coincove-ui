import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../environments/environment';
import { JwtClient } from './auth/jwtClient';
import { AuthService } from './auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class BitcoinService extends JwtClient {

  constructor(private httpClient: HttpClient, 
    private authService: AuthService) {
      super(authService);
     }

  getSendAddress(): Observable<any> {
    return this.httpClient.get<any>(environment.urlApi + '/bitcoin/address',
      this.getOptions())
      .pipe();
  }

  getBitcoinPriceIndex(): Observable<any> {
    return this.httpClient.get('https://api.coindesk.com/v1/bpi/currentprice/CAD.json').pipe();
  }
}

