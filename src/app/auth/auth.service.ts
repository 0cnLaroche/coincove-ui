import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { User } from '../model/user';
import { BehaviorSubject } from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = new BehaviorSubject<boolean>(false);
  private _token: string;

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  get token() {
    return this._token;
  }

  constructor(private http: HttpClient) {
    console.log('Auth Service');
    this.login('admin', 'admin');
    const userData = localStorage.getItem('user');
    if (userData) {
      console.log('Logged in from memory');
      const user = JSON.parse(userData);
      this._token = user.token;
      this.loggedIn.next(true);
    }
  }
    
  login(username:string, password:string ) {
      return this.http.post<HttpResponse<User>>(environment.urlApi + '/login', {username, password},
       {observe:'response'}).subscribe(res => {
          console.log(res.headers.keys);
          this._token = res.headers.get('Authorization').replace('Bearer ','');
          this.loggedIn.next(true);
          const userData = {
            token: this._token,
          };
          localStorage.setItem('user', JSON.stringify(userData));
       })
  }
  logout() {
    //this.server.setLoggedIn(false);
    delete this._token;

    this.loggedIn.next(false);
    localStorage.clear();
    //this.router.navigate(['/']);
  }
  
}
