import {Payment} from './payment';
import {Item} from './item';

export class Order {
  itemList: Array<Item> ;
  paymentList: Array<Payment>;
  status: OrderStatus;
  shippedDate: Date;
  total: number;
}
enum OrderStatus {
  COMPLETED,
  PENDING,
  TRANSMITTED_TO_VENDOR,
  SHIPPED
}
