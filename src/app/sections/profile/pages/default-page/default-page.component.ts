import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { formatDate } from "@angular/common"
import { AuthService } from "../../../../services/auth.service";
import { ProfileService } from "../../../../services/profile.service";

@Component({
  selector: 'app-default-page',
  templateUrl: './default-page.component.html',
  styleUrls: ['./default-page.component.scss']
})
export class DefaultPageComponent implements OnInit {

  modalFlag: boolean = false;
  userInfo: any;
  initials: string = ""

  form: FormGroup;


  constructor(
      private formBuilder: FormBuilder,
      private authService: AuthService,
      private profileService: ProfileService
  ) { }

  ngOnInit(): void {
    this.userInfo = JSON.parse(this.authService.currentUser);
    this.initials = this.userInfo.name[0] + this.userInfo.surname[0];
    console.log(this.userInfo);

    this.form = this.formBuilder.group({
      id: [this.userInfo.id],
      name: [this.userInfo.name],
      surname: [this.userInfo.surname],
      date: [formatDate(this.userInfo.dateOfBirth, 'yyyy-MM-dd', 'en')],
      email: [this.userInfo.email, [Validators.required]],
      password: [null, [Validators.required]],
    })
  }

  submit() {
    console.log(this.form.getRawValue());
     this.profileService.updateUser(this.form.getRawValue())
         .subscribe(res => {
           console.log(res)
         },
         err => {
           console.log(err)
         })
  }
}
