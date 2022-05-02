import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { formatDate } from "@angular/common"

@Component({
  selector: 'app-default-page',
  templateUrl: './default-page.component.html',
  styleUrls: ['./default-page.component.scss']
})
export class DefaultPageComponent implements OnInit {

  modalFlag: boolean = false;
  userInfo: any;
  form: FormGroup;

  constructor(
      private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.userInfo = {
      name: "Sanzhar",
      surname: "Nakyp",
      email: "nakyp.sanzhar@gmail.com",
      dateBirth: "12/05/2003"
    }
    this.form = this.formBuilder.group({
      name: [this.userInfo.name],
      surname: [this.userInfo.surname],
      dateBirth: [formatDate(this.userInfo.dateBirth, 'yyyy-MM-dd', 'en')]
    })
  }

  submit() {
     console.log(this.form.getRawValue());
  }
}
