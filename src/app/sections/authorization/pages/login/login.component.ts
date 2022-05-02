import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { AuthService } from "../../../../services/auth.service";
import { PermissionService } from "../../../../services/permission.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
      private router: Router,
      private formBuilder: FormBuilder,
      private authService: AuthService,
      private permissionService: PermissionService
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: [null, [Validators.email]],
      password: [null, [Validators.required]]
    })
  }

  submit() {
    // this.authService.login(this.form.value).subscribe(
    //     res => {
    //       this.router.navigateByUrl(this.permissionService.getDefaultSection())
    //     },
    //     err => {
    //       console.log("The data entered is incorrect")
    //       console.log(err)
    //     }
    // )
    sessionStorage.setItem("AUTH_DATA", "AUTH_DATA");
    sessionStorage.setItem("JWT_TOKEN", "Token");
    this.router.navigateByUrl(this.permissionService.getDefaultSection())
  }
}
