import { AdminService } from './../admin.service';
import { Component, OnInit, Input } from '@angular/core';
import { Admin } from '../admin/admin';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-admin-details',
  templateUrl: './admin-details.component.html',
  styleUrls: ['./admin-details.component.css']
})
export class AdminDetailsComponent implements OnInit {

  DSTadmin: any[];
  DSTad: any[];

  @Input() admin: Admin;
  constructor(private adminService: AdminService, private db: AngularFireDatabase) {
     // getting admins details
    db.list('/admin').snapshotChanges().subscribe(admin => {
    this.DSTadmin = admin;
    console.log(admin);
  });
  db.list('/admin').valueChanges().subscribe(admin => {
    this.DSTad = admin;
    console.log(admin);
  });
  }


  ngOnInit() {
  }

  updateAdmin(isActive: boolean) {
    this.adminService.updateAdmin(this.admin.key, { active: isActive });
  }

  deleteAdmin() {
    this.adminService.deleteAdmin(this.admin.key);
  }

}
