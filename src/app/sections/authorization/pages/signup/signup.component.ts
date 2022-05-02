import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { AuthService } from "../../../../services/auth.service";
import { PermissionService } from "../../../../services/permission.service";
// import { ISignUp } from "../../../../models/auth.model";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  form: FormGroup;

  constructor(
      private router: Router,
      private formBuilder: FormBuilder,
      private authService: AuthService,
      private permissionService: PermissionService
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: [null, [Validators.required]],
      name: [null, [Validators.required]],
      surname: [null, [Validators.required]],
      date: [null, [Validators.required]],
      password: [null, [Validators.required]],
      repPassword: [null, [Validators.required]],
    })
  }

  submit(): void {
    // let data: ISignUp = null;
    let formValue = this.form.getRawValue();
    // data.email = formValue.email;
    // data.name = formValue.name;
    // data.surname = formValue.surname;
    // data.date = formValue.surname;
    // data.password = formValue.password;

    this.authService.signup(formValue).subscribe(
        res => {

        },
        err => {
          if (err.status == 200) {
            window.alert("User registered successfully")
            this.router.navigate(['/auth/login']);
          } else {
            window.alert("Email alrady taken");
          }
        }
    )
  }
}
