import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";

import { TeachingService } from "../../../../services/teaching.service";

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.scss']
})
export class NewCourseComponent implements OnInit {

  form: FormGroup;
  categoriesData: any;

  constructor(
      private router: Router,
      private formBuilder: FormBuilder,
      private teachingService: TeachingService
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [null],
      description: [null],
      duration: [null],
      categories: this.formBuilder.array([]),
    })

    this.teachingService.getCategories()
        .subscribe(res => {
          console.log("res", res);
          this.categoriesData = res;
        },
        err => {
          console.log("res", err);
        })
  }

  categories() {
    return this.form.get('categories') as FormArray
  }

  newCategory() {
    return this.formBuilder.group({
      categoryName: null,
    })
  }

  addCategory() {
    this.categories().push(this.newCategory());
  }

  submit() {
    let formData = this.form.getRawValue();
    const tempCourse = {
      title: null,
      description: null,
      duration: null,
      categories: []
    }
    console.log(formData.name);
    tempCourse.title = formData.name;
    tempCourse.description = formData.description;
    tempCourse.duration = formData.duration;
    for (let i of formData.categories) {
      tempCourse.categories.push(i.categoryName);
    }
    console.log(tempCourse);
    this.teachingService.createCourse(tempCourse)
        .subscribe(res => {
          console.log("res", res);
          return this.router.navigateByUrl('/teaching');
        },
        err => {
          console.log("err", err);
          if (err.status == 200) {
            return this.router.navigateByUrl('/teaching');
          }
          return null;
        })
  }

}
