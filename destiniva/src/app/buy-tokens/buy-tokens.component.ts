import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-buy-tokens',
  templateUrl: './buy-tokens.component.html',
  styleUrls: ['./buy-tokens.component.css']
})
export class BuyTokensComponent implements OnInit {

  prices: any;
  bitcoindesk = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD';
  cryptoPrice = 'https://api.coinmarketcap.com/v2/ticker/';
  btcPrice: any = '';
  values: any = '';
  marketPrice: any = '';
  val: any;
  B: any;
  E: any;
  BC: any;
  public _values = ['USD', 'BTC', 'ETH', 'BCH', 'Currencies'];

  BTC: any = '';
  ETH: any = '';
  BCH: any = '';

  tokens: any;
  value: any = [];

  constructor(db: AngularFireDatabase, private http: HttpClient) {
     // Displaying DST prices
     db.list('/prices').valueChanges().subscribe(prices => {
      this.prices = prices;
      console.log(this.prices);
    });
  }

   // Selector Value change depending Currencies
   firstDropDownChanged(val: any) {
    console.log(val);

    if (val === 'ETH') {
      this.btcPrice = this.ETH;
    } else if (val === 'BTC') {
      this.btcPrice = this.BTC;
    } else if (val === 'USD') {
      this.btcPrice = 1;
    } else if (val === 'BCH' ) {
      this.btcPrice = this.BCH;
    } else {
      this.btcPrice = 0;
    }
  }
  onTokenSubmit() {}

  // Displaying data "Price Tokens" on Client Inputs
   update(value: any) {
    this.values = value;
    console.log(this.values / (this.prices / this.btcPrice));
    if (this.val === 'ETH') {
      this.btcPrice = this.ETH;
    }
  }

  addValues(amount) {
    if (amount) {
      this.value.push(amount / (this.prices / this.btcPrice));
      console.log(amount);
      console.log(this.value);
    }
  }

  ngOnInit() {
    this.http.get(this.bitcoindesk).subscribe(data => {
      console.log(data);
      this.btcPrice = data;
  });

    this.http.get(this.cryptoPrice).subscribe(cript => {
        console.log(cript);
        this.marketPrice = cript;
    });

    this.http.get(this.cryptoPrice).subscribe(b => {
      this.B = b;
      this.BTC = this.B.data[1].quotes.USD.price;
      console.log(this.BTC);
    });
    this.http.get(this.cryptoPrice).subscribe(e => {
      this.E = e;
      this.ETH = this.E.data[1027].quotes.USD.price;
      console.log(this.ETH);
    });
    this.http.get(this.cryptoPrice).subscribe(c => {
      this.BC = c;
      this.BCH = this.BC.data[1831].quotes.USD.price;
      console.log(this.BCH);
    });
  }


}
