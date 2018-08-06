import { Component, OnInit } from '@angular/core';
import { getLocaleTimeFormat } from '@angular/common';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  reference = 'yEYt2Bya';
  date = new Date();
  PaymentOption = 'Crypto';
  FiatAmount = '5,000';
  Currency = 'USD';
  TokenAmount = '85714.28571429';
  Status = 'Pending';

  constructor() { }

  ngOnInit() {
  }

}
