import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';

import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  userInfo: any;
  initials: string = ""

  constructor(
      private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.userInfo = JSON.parse(this.authService.currentUser);
    this.initials = this.userInfo.name[0] + this.userInfo.surname[0];
  }

  isLogged() {
    return this.authService.isLogged;
  }

  logout() {
    this.authService.logout();
  }
}
