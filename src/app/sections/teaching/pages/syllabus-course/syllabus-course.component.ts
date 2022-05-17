import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { TeachingService } from "../../../../services/teaching.service";

@Component({
  selector: 'app-syllabus-course',
  templateUrl: './syllabus-course.component.html',
  styleUrls: ['./syllabus-course.component.scss']
})
export class SyllabusCourseComponent implements OnInit, OnDestroy {

  courseId: number;
  private routeSub: Subscription;

  courseData: any;
  modulesData: any;

  constructor(
      private route: ActivatedRoute,
      private teachingService: TeachingService
  ) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.courseId = params['id']
    });

    this.teachingService.getCourse(this.courseId)
        .subscribe(res => {
          this.courseData = res;
          this.modulesData = this.courseData.modules;
        },
        err => {
          console.log("err", err)
        })
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

}
