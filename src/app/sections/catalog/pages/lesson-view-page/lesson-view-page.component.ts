import { Component, OnInit } from '@angular/core';
import { Subscription } from "rxjs";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { TeachingService } from "../../../../services/teaching.service";

@Component({
  selector: 'app-lesson-view-page',
  templateUrl: './lesson-view-page.component.html',
  styleUrls: ['./lesson-view-page.component.scss']
})
export class LessonViewPageComponent implements OnInit {

  courseId: number;
  moduleId: number;
  lessonId: number;
  private routeSub: Subscription;

  courseData: any;
  modulesData: any;
  lessonData: any;

  form: FormGroup;

  constructor(
      private route: ActivatedRoute,
      private formBuilder: FormBuilder,
      private teachingService: TeachingService
  ) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.courseId = params['idCourse'];
      this.moduleId = params['idModule'];
      this.lessonId = params['idLesson'];

      this.teachingService.getCourse(this.courseId)
          .subscribe(res => {
                this.courseData = res;
                this.modulesData = this.courseData.modules;
                this.getLesson();
              },
              err => {
                console.log(err);
              })
    });

    this.form = this.formBuilder.group({
      texts: this.formBuilder.array([])
    })
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }

  getLesson() {
    this.teachingService.getModule(this.moduleId)
        .subscribe(res => {
          let temp: any = res;
          this.lessonData = temp.lessons[this.lessonId-1];
          console.log(this.lessonData);
        })
  }
}
