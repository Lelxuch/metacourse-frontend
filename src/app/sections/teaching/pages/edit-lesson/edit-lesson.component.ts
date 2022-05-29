import { Component, OnDestroy, OnInit } from '@angular/core';
import { Form, FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { AngularEditorConfig } from "@kolkov/angular-editor";

import { TeachingService } from "../../../../services/teaching.service";

@Component({
  selector: 'app-edit-lesson',
  templateUrl: './edit-lesson.component.html',
  styleUrls: ['./edit-lesson.component.scss']
})
export class EditLessonComponent implements OnInit, OnDestroy {

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '0',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    uploadUrl: 'v1/image',
    uploadWithCredentials: false,
    sanitize: true,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [
      ['bold', 'italic'],
      ['fontSize']
    ]
  };

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
                this.getLessonReset()
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

          for (let i = 0; i < this.lessonData.texts.length; ++i) {
            this.addPatchText(this.lessonData.texts[i]);
          }
        })
  }

  getLessonReset() {
    while (this.texts().length !== 0) {
      this.texts().removeAt(0)
    }
    this.teachingService.getModule(this.moduleId)
        .subscribe(res => {
          let temp: any = res;

          this.lessonData = temp.lessons[this.lessonId-1];

          for (let i = 0; i < this.lessonData.texts.length; ++i) {
            this.addPatchText(this.lessonData.texts[i]);
          }
        },
        err => {
          console.log(err);
        })
  }


  texts() {
    return this.form.get('texts') as FormArray
  }

  newText() {
    return this.formBuilder.group({
      heading: null,
      text: "",
    })
  }

  addText() {
    this.teachingService.createText(this.lessonData.id)
        .subscribe(res => {
          console.log(res)
          this.getLesson();
          this.texts().push(this.newText());
        },
        err => {
          console.log(err);
          this.getLesson();
          this.texts().push(this.newText());
        })
  }

  addPatchText(textTemp: any) {
    let text = this.formBuilder.group({
      id: null,
      heading: null,
      text: null,
    });
    let textToPatch = {
      id: textTemp.id,
      heading: textTemp.heading,
      text : textTemp.text
    }
    text.patchValue(textToPatch);
    this.texts().push(text);
  }

  submit() {
    let formData = this.form.getRawValue().texts;
    console.log(formData);

    for (let i = 0; i < formData.length; ++i) {
      this.teachingService.putText(formData[i])
          .subscribe(res => {
            console.log(res);
          },
          err => {
            console.log(err);
          })
    }
  }
}
