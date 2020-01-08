import {Component, Input, OnInit} from '@angular/core';
import {PaymentService} from '../payment.service';
import {BitcoinService} from '../bitcoin.service';
import {ConfidenceService} from '../confidence.service';
import {Observable, interval} from 'rxjs';
import {Payment} from '../model/payment';
import {Order} from '../model/order';
import {startWith, switchMap} from 'rxjs/operators';
import {WebSocketAPI} from '../webSocketAPI';

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
  estimatedConfidence$: Observable<any>;
  ws: WebSocketAPI;

  greeting: any;
  helloMessage: any;


  constructor(private paymentService: PaymentService, private bitcoinService: BitcoinService,
              private confidenceService: ConfidenceService) {

                this.ws = new WebSocketAPI();
                this.helloMessage = {name:'sam'}
  }

  ngOnInit() {

    this.order = new Order(); // Mocked
    this.order.total = 500.00;
    this.payment = new Payment();
    this.payment.currency = 'CAD';
    this.payment.value = this.order.total;
    //this.getFreshSendAddress();
    this.setSatoshis(this.order.total);
    this.getConfidence(this.order.total);

    this.ws._connect().subscribe(g => this.greeting = g);
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
        this.polled(payment.id);
      });
  }
  getConfidence(value: number) {
    this.confidenceService.getEstimatedConfidence(value)
      .subscribe(confidence => {
        this.estimatedConfidence$ = confidence;
      });
  }

  polled(id: string) {
    interval(5000)
      .pipe(
        startWith(0),
        switchMap(()=> this.paymentService.get(id))
      )
      .subscribe(res => this.payment = res)
  }

  send() {
      this.ws._send(this.helloMessage);
  }


}
