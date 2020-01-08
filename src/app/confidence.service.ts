import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ConfidenceService {

  constructor(private httpClient: HttpClient) { }

  getEstimatedConfidence(value: number): Observable<any> {
    return this.httpClient.get(environment.urlApi + `/confidence?value=${value}`)
      .pipe();
  }
}
