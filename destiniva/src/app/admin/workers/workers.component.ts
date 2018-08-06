import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin/admin';

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.css']
})
export class WorkersComponent implements OnInit {

  selectedAdmin: Admin = new Admin();

  constructor() { }

  ngOnInit() {
  }

}
