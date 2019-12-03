import {Component, Input, OnInit} from '@angular/core';
import {PaymentService} from '../payment.service';
import {BitcoinService} from '../bitcoin.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  @Input() order: Order;
  payment: Payment;

  constructor(private paymentService: PaymentService, private bitcoinService: BitcoinService) { }

  ngOnInit() {
    this.payment = new Payment();
    this.payment.currency = 'CND';
    // this.payment.orderId =
    // this.payment.value =
    this.getFreshSendAddress();
  }

  getFreshSendAddress(): void {
    this.bitcoinService.getSendAddress()
      .subscribe(address => this.payment.address = address);
}

}
