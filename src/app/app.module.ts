import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Angular Material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopBarComponent } from './top-bar/top-bar.component';
import { PaymentComponent } from './payment/payment.component';
import {PaymentService} from './payment.service';
import {BitcoinService} from './bitcoin.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import {AuthService} from './auth/auth.service';
import { TokenInterceptor } from './auth/tokenInterceptor';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatProgressBarModule
  ],
  providers: [
    PaymentService,
    BitcoinService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
