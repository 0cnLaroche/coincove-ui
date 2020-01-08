import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Payment} from './model/payment';
import {environment} from '../environments/environment';
import { AuthService } from './auth/auth.service';
import { JwtClient } from './auth/jwtClient';

@Injectable({
  providedIn: 'root'
})
export class PaymentService extends JwtClient {

  private urlApi: string;

  constructor(private httpClient: HttpClient, private authService: AuthService) {
    super(authService);
    this.urlApi = environment.urlApi;
    
  }

  submit(payment: Payment): Observable<Payment> {
    return this.httpClient.post<Payment>(this.urlApi + '/payment', payment, 
    this.getOptions())
      .pipe();
  }
  get(id: string): Observable<Payment> {
    return this.httpClient.get<Payment>(this.urlApi + `/payment/${id}`, 
    this.getOptions())
      .pipe();
  }

}
