import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private httpClient: HttpClient) { }

  submit(payment: Payment): Observable<Payment> {
    return this.httpClient.post<Payment>('/payment', payment)
      .pipe();
  }
  get(id: string): Observable<Payment> {
    return this.httpClient.get<Payment>('/payment/${id}').pipe();
  }
}
