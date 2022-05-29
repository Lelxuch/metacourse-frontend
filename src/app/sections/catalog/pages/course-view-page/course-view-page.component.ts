import {Component, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { TeachingService } from "../../../../services/teaching.service";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-course-view-page',
  templateUrl: './course-view-page.component.html',
  styleUrls: ['./course-view-page.component.scss']
})
export class CourseViewPageComponent implements OnInit, OnDestroy {

    courseId: number;
    private routeSub: Subscription;

    courseData: any;
    modulesData: any = [];

    constructor(
        private route: ActivatedRoute,
        private teachingService: TeachingService
    ) { }

    ngOnInit(): void {
        this.routeSub = this.route.params.subscribe(params => {
            this.courseId = params['idCourse']
        });

        this.getModules()
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }

    getModules() {
        this.teachingService.getCourse(this.courseId)
            .subscribe(res => {
                this.courseData = res;
                this.modulesData = this.courseData.modules;
                console.log(this.modulesData);
            })
    }
}
