import { Component, OnInit } from '@angular/core';
import { TeachingService } from "../../../../services/teaching.service";

@Component({
  selector: 'app-default-page',
  templateUrl: './default-page.component.html',
  styleUrls: ['./default-page.component.scss']
})
export class DefaultPageComponent implements OnInit {

  courses: any;

  constructor(
      private teachingService: TeachingService
  ) { }

  ngOnInit(): void {
    this.teachingService.getCourses()
        .subscribe(res => {
          this.courses = res;
        },
        err => {
          console.log(err)
        })
  }
}
