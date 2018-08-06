import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-purchase-address',
  templateUrl: './purchase-address.component.html',
  styleUrls: ['./purchase-address.component.css']
})
export class PurchaseAddressComponent implements OnInit {


public data = {};

 // Generating a new address..
 key = 'a8a3872d-d60e-4eff-bb8c-3547e390c336';
 amount = 0.005;
 callbackURL = 'http%3A%2F%2Fdestiniva.com/';
 xPub = 'xpub6Bgdr2z43GZJi5ZpWqVBGdt8Q6zjDHqKZmn3iJPJCprRLU3axMyAEAWX5gTsoN6QRz7AjzxfRZTvvmbYKMzRKJ2Rfkj93rt2VCxQj9gAqF1';
 btcadd = '4b8cd8e9-9480-44cc-b7f2-527e98ee3287';
 password = 'cerati@@2325';
 gaddress = 'https://api.blockchain.info/v2/receive?xpub=' + this.xPub + '&callback=' + this.callbackURL + '&key=' + this.key;
 genAdd: any = '';


  constructor(private http: HttpClient) {}

  ngOnInit() {
     this.http.get(this.gaddress).subscribe(gen => {
    console.log(gen);
    this.genAdd = gen;
  });
}
}
