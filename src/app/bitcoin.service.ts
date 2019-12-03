import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {

  constructor(private httpClient: HttpClient) { }

  getSendAddress(): Observable<string> {
    return this.httpClient.get<string>('/bitcoin/address').pipe();
  }
}
