import { Admin } from './../admin/admin';
import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';


@Component({
  selector: 'app-admin-create',
  templateUrl: './admin-create.component.html',
  styleUrls: ['./admin-create.component.css']
})
export class AdminCreateComponent implements OnInit {

  admin: Admin = new Admin();
  submitted = false;

  constructor(private adminService: AdminService) { }

  ngOnInit() {
  }

  newAdmin(): void {
    this.submitted = false;
    this.admin = new Admin();
  }

  save() {
    this.adminService.createAdmin(this.admin);
    this.admin = new Admin();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

}
