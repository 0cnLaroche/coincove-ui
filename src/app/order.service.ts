import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Order} from './model/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient: HttpClient) { }

  getTotalValue(order: Order): number {
    let total = 0;
    for (let item of order.itemList) {
      total += item.quantity * (item.product.listPrice -  item.product.discount);
    }
    return total;
  }
}
