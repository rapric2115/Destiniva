import { Price } from './price';
import { AdminService } from './../admin.service';
import { AuthService } from './../../auth.service';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Component, OnInit, Input} from '@angular/core';
import { Observable } from '../../../../node_modules/rxjs';
import { Admin } from '../admin/admin';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  @Input() admin: Admin;
  @Input() dstPrice: Price;
  ad: any;

  title = 'app-works';
  users: any[];
  user: any[];
  prices: Observable<any[]>;
  price: any[];
  priceRef: AngularFireList<any[]>;
  DSTprice: any[];
  adRef: any;
  dstprice: any;
  btcAddress = '19VZxf7NGrtp14nMxf5CYYt6xNT5Kk68PS';
  address = 'https://blockchain.info/q/addressbalance/' + this.btcAddress  + '?confirmations=3';
  balance: any = '';

  constructor(private http: HttpClient, private authService: AuthService, private db: AngularFireDatabase,
  private adminService: AdminService) {
    db.list('/users').valueChanges().subscribe(user => {
      this.users = user;
    });
    db.list('/prices').valueChanges().subscribe( price => {
      this.DSTprice = price;
      console.log(this.DSTprice);
    });
    db.list('/admin').valueChanges().subscribe( admin => {
      this.adRef = admin;
    });

    this.dstprice = db.object('/prices/');
  }
  getInputVal(id) {
    return (<HTMLInputElement>document.getElementById(id)).value;
  }

  update(price: any) {
    // this.dstprice.update({DSTprice: 0.05}).then(_ => console.log(price));
    const pr = this.getInputVal('dstp');
    this.dstprice.update({'DSTprice': pr}).then(_ => console.log('updated!'));
  }

  deleteAdmin() {
    this.adminService.deleteAdmin(this.admin.key);
  }

  ngOnInit() {
    this.http.get(this.address).subscribe(data => {
      console.log(data);
      this.balance = data;
  });
    }

  remove($key) {
  }

  deleteCustomers() {
    this.adminService.deleteAll();
  }
}
