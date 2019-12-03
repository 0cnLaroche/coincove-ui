import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {MatToolbarModule} from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopBarComponent } from './top-bar/top-bar.component';
import { PaymentComponent } from './payment/payment.component';
import {PaymentService} from './payment.service';
import {BitcoinService} from './bitcoin.service';

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
    MatToolbarModule
  ],
  providers: [
    PaymentService,
    BitcoinService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
