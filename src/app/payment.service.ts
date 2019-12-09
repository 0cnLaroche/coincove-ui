import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Payment} from './model/payment';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private urlApi: string;

  constructor(private httpClient: HttpClient) {
    this.urlApi = environment.urlApi;
  }

  submit(payment: Payment): Observable<Payment> {
    return this.httpClient.post<Payment>(this.urlApi + '/payment', payment)
      .pipe();
  }
  get(id: string): Observable<Payment> {
    return this.httpClient.get<Payment>(this.urlApi + '/payment/${id}').pipe();
  }
}
