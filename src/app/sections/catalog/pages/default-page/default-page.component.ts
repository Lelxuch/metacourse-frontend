import {Component, OnDestroy, OnInit} from '@angular/core';

import { CourseService } from "../../../../services/course.service";

@Component({
  selector: 'app-default-page',
  templateUrl: './default-page.component.html',
  styleUrls: ['./default-page.component.scss']
})
export class DefaultPageComponent implements OnInit {

  recCourses: any = []
  categories: any = []

  constructor(
      private courseService: CourseService
  ) { }

  ngOnInit(): void {
    this.courseService.getRecommendations()
        .subscribe(res => {
          let temp: any = res;
          this.recCourses = temp.recommendationsCourses;
          // console.log(this.recCourses[0]);
        })

    this.courseService.getCategories()
        .subscribe(res => {
            this.categories = res
            console.log(this.categories);
        },
        err => {
            console.log(err)
        })
  }
}
