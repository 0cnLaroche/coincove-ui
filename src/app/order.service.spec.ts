import { TestBed } from '@angular/core/testing';

import { OrderService } from './order.service';
import { Order } from './model/order';
import { Product } from './model/product';
import { Item } from './model/item';


describe('OrderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrderService = TestBed.get(OrderService);
    expect(service).toBeTruthy();
  });

  it('should return order total value', () => {
    const service: OrderService = TestBed.get(OrderService);
    const order = new Order();
    const product1 = new Product();
    product1.listPrice = 100.0;
    product1.discount = 0.0;
    const product2 = new Product();
    product2.listPrice = 50.0;
    product2.discount = 25.0;

    const item1 = new Item();
    item1.product = product1 ;
    item1.quantity = 1;
    const item2 = new Item();
    item2.product = product2;
    item2.quantity = 2;

    order.itemList = [item1, item2];

    expect(service.getTotalValue(order)).toEqual(150.0);
  });
});
