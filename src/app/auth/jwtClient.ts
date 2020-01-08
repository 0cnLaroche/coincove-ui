import { HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';

export class JwtClient {

    public options: {headers:HttpHeaders};

    constructor(private auth: AuthService) {
        const headers = new HttpHeaders();
        this.options = {headers};
        this.auth.isLoggedIn.subscribe(loggedId => {
            if(loggedId) {
              this.setHeader('Authorization', 'Bearer ' +  auth.token);
            } else {
                this.removeHeader('Authorization');
            }
          })
    }

    public getOptions() {
        return this.options;
    }

    private setHeader(id: string, value: string) {
        this.options.headers.set(id, value);
      }

    private removeHeader(id: string) {
        this.options.headers.delete(id);
      }    
}