import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Admin } from './admin/admin';
import { Price } from './admin/price';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  public dbAdmin = '/admin';
  public dbPrice = '/prices/DSTprice';
  adminRef: AngularFireList<Admin> = null;
  priceRef: AngularFireList<Price> = null;

  constructor(private db: AngularFireDatabase) {
    this.adminRef = db.list(this.dbAdmin);
   }

   createAdmin(admin: Admin): void {
    this.adminRef.push(admin);
  }

  updateAdmin(key: string, value: any): void {
    this.adminRef.update(key, value).catch(error => this.handleError(error));
  }

  updatePrice(key: string, value: any): void {
    this.priceRef.update(key, value).catch(error => this.handleError(error));
  }

  deleteAdmin(key: string): void {
    this.adminRef.remove(key).catch(error => this.handleError(error));
  }

  getAdminList(): AngularFireList<Admin> {
    return this.adminRef;
  }

  deleteAll(): void {
    this.adminRef.remove().catch(error => this.handleError(error));
  }

  private handleError(error) {
    console.log(error);
  }
}
