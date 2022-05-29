import {Component, OnDestroy, OnInit} from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from "rxjs";

import { TeachingService } from "../../../../services/teaching.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss']
})
export class EditCourseComponent implements OnInit, OnDestroy {

  courseId: number;
  private routeSub: Subscription;

  modulesForm: FormGroup;
  courseData: any;
  modulesData: any = [];

  constructor(
      private route: ActivatedRoute,
      private formBuilder: FormBuilder,
      private teachingService: TeachingService
  ) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.courseId = params['id']
    });

    this.modulesForm = this.formBuilder.group({
      modules: this.formBuilder.array([])
    })

    this.getModulesReset();
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  getModules() {
    this.teachingService.getCourse(this.courseId)
        .subscribe(res => {
          this.courseData = res;
          this.modulesData = this.courseData.modules;
        })
  }

  getModulesReset() {
    this.teachingService.getCourse(this.courseId)
        .subscribe(res => {
          this.courseData = res;
          this.modulesData = this.courseData.modules;

          for (let i = 0; i < this.modulesData.length; ++i) {
            this.patchAddModule(this.modulesData[i]);
          }

          for (let i = 0; i < this.modulesData.length; ++i) {
            for (let j = 0; j < this.modulesData[i].lessons.length; ++j) {
              this.patchAddLesson(i, this.modulesData[i].lessons[j]);
            }
          }

          // for(let module of this.modules().controls) {
          //   console.log(module.id);
          // }
        })
  }

  modules(): FormArray {
    return this.modulesForm.get('modules') as FormArray
  }

  newModule(): FormGroup {
    return this.formBuilder.group({
      moduleName: "",
      lessons: this.formBuilder.array([])
    })
  }

  addModule() {
    this.teachingService.createModule(this.courseId)
        .subscribe(res => {
          console.log(res)
        },
        err => {
          if (err.status == 200) {
            console.log("Module Create successfully")
            this.modules().push(this.newModule());
            this.getModules();
          }
        })
  }

  patchAddModule(moduleTemp: any) {
    let module = this.formBuilder.group({
      id: [null, Validators.required],
      moduleName: ['', Validators.required],
      lessons: this.formBuilder.array([])
    });
    let moduleToPatch = {
      id: moduleTemp.id,
      moduleName: moduleTemp.title,
      lessons: moduleTemp.lessons
    }
    module.patchValue(moduleToPatch);
    this.modules().push(module);
  }

  removeModule(i: number) {
    this.modules().removeAt(i);
  }

  moduleLessons(i: number): FormArray {
    return this.modules().at(i).get('lessons') as FormArray;
  }

  newLesson() {
    return this.formBuilder.group({
      id: null,
      lessonName: ""
    })
  }

  addLesson(i: number, module: any) {
    let moduleId = this.modulesData[i].id;
    this.teachingService.createLesson(moduleId)
        .subscribe(res => {
              console.log(res)
              this.getModulesReset();
            },
            err => {
              if (err.status == 200) {
                console.log("Successfully")
                this.moduleLessons(i).push(this.newLesson());
              }
            })
  }

  patchAddLesson(i: number, lessonTemp: any) {
    let lesson = this.formBuilder.group({
      lessonName: ['', Validators.required]
    })
    let lessonToPatch = {
      lessonName: lessonTemp.title
    }
    lesson.patchValue(lessonToPatch);
    this.moduleLessons(i).push(lesson);
  }

  removeLesson(im: number, is: number) {
    this.moduleLessons(im).removeAt(is);
  }

  submit() {
    let formData = this.modulesForm.getRawValue();

    for (let i = 0; i < formData.modules.length; ++i) {
      let tempModule = formData.modules[i];
      const moduleToSend = {
        title: tempModule.moduleName,
        duration: "90"
      }
      console.log(moduleToSend);
      this.teachingService.editModule(this.modulesData[i].id, moduleToSend)
          .subscribe(res => {
            console.log(res);
          },
          err => {
            console.log(err);
          })
    }

    for(let i = 0; i < formData.modules.length; ++i) {
      let lessons = formData.modules[i].lessons;
      for(let j = 0; j < lessons.length; ++j) {
        let tempLesson = lessons[j];
        console.log(tempLesson);
        const lessonToSend = {
          title: tempLesson.lessonName,
          description: tempLesson.lessonName
        }
        console.log(lessonToSend);
        this.teachingService.editLesson(this.modulesData[i].lessons[j].id, lessonToSend)
            .subscribe(res => {
              console.log(res);
            },
            err => {
              console.log(err);
            })
      }
    }

  }
}















