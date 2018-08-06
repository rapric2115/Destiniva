import { AuthService } from '../auth.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 profile: any;

  constructor(public authService: AuthService) { }

  ngOnInit() {
    if (this.authService.userProfile) {
      this.profile = this.authService.userProfile;
    } else {
        this.authService.getProfile((err, profile) => {
        this.profile = profile;
      });
    }
  }

}
