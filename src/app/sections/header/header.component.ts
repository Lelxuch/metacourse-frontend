import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';

import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  // flag: boolean = false;

  @ViewChild('dropdown-content') dropdownContent: HTMLElement;

  constructor(
      private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    // this.flag = false;
  }

  isLogged() {
    return this.authService.isLogged;
  }

  logout() {
    this.authService.logout();
  }

  // profileClicked() {
  //   this.flag = !this.flag;
  // }
}
