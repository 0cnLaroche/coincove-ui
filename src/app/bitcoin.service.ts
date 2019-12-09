import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {

  private urlApi: string;

  constructor(private httpClient: HttpClient) {
    this.urlApi = environment.urlApi;
  }

  getSendAddress(): Observable<any> {
    return this.httpClient.get<any>(/*this.urlApi +*/ '/bitcoin/address').pipe();
  }

  getBitcoinPriceIndex(): Observable<any> {
    return this.httpClient.get('https://api.coindesk.com/v1/bpi/currentprice/CAD.json').pipe();
  }
}

