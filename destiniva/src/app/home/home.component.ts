import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // Getting Wallet balance
  btcAddress = '19VZxf7NGrtp14nMxf5CYYt6xNT5Kk68PS';
  address = 'https://blockchain.info/q/addressbalance/' + this.btcAddress  + '?confirmations=3';
  balance: any = '';
  prices: any;
  /*
  img: any = document.getElementById('platformMobile');
  el: any = document.getElementById('imgOne').addEventListener('mouseover', onmouseover);
  */
  constructor(private http: HttpClient, db: AngularFireDatabase, public authService: AuthService) {
    // Displaying DST prices
    db.list('/prices').valueChanges().subscribe(prices => {
      this.prices = prices;
      console.log(this.prices);
    });
   }

   mouseEnter() {
    document.getElementById('platformMobile').className = 'back';
   }

   mouseLeave() {
     document.getElementById('platformMobile').className = 'imgOne';
   }

   mouseOver() {
     document.getElementById('platformMobile').className = 'imgTwo';
   }

  ngOnInit() {
    this.http.get(this.address).subscribe(data => {
      console.log(data);
      this.balance = data;
  });
  }
}
