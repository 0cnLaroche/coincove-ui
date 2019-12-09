import {Component, Input, OnInit} from '@angular/core';
import {PaymentService} from '../payment.service';
import {BitcoinService} from '../bitcoin.service';
import {ConfidenceService} from '../confidence.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {Payment} from '../model/payment';
import {Order} from '../model/order';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  @Input() order: Order;
  payment: Payment;
  btcValue: number;
  confirmations$: Observable<number>;
  rate: number;
  load$ = new BehaviorSubject('');
  estimatedConfidence$: Observable<any>;

  constructor(private paymentService: PaymentService, private bitcoinService: BitcoinService,
              private confidenceService: ConfidenceService) {
  }

  ngOnInit() {

    this.order = new Order(); // Mocked
    this.order.total = 10000;
    this.payment = new Payment();
    this.payment.currency = 'CAD';
    // this.payment.orderId =
    this.payment.value = this.order.total;
    this.getFreshSendAddress();
    this.setSatoshis(this.order.total);
    this.getConfidence(this.order.total);
  }

  getFreshSendAddress(): void {
    this.bitcoinService.getSendAddress()
      .subscribe(response => this.payment.address = response.address);
  }

  setSatoshis(value: number): void {
    this.bitcoinService.getBitcoinPriceIndex()
      .subscribe(response => {
        const rate = response.bpi.CAD.rate_float;
        this.rate = rate.toFixed(2);
        this.btcValue = value / rate;
        this.payment.satoshis = this.btcValue * 100000000;
      });
  }

  submitPayment(): void {
    this.paymentService.submit(this.payment)
      .subscribe(payment => {
        this.payment = payment;
      });
  }
  getConfidence(value: number) {
    this.confidenceService.getEstimatedConfidence(value)
      .subscribe(confidence => {
        this.estimatedConfidence$ = confidence;
      });
  }


}
