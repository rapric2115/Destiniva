import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders-reference',
  templateUrl: './orders-reference.component.html',
  styleUrls: ['./orders-reference.component.css']
})
export class OrdersReferenceComponent implements OnInit {

  orderReferenceID = 'yEYt2Bya';
  date = new Date();
  constructor() { }

  ngOnInit() {
  }

}
