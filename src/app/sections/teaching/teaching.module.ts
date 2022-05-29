import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { AngularEditorModule } from "@kolkov/angular-editor";

import { DefaultPageComponent } from './pages/default-page/default-page.component';
import { NewCourseComponent } from './pages/new-course/new-course.component';
import { EditCourseComponent } from './pages/edit-course/edit-course.component';
import { SyllabusCourseComponent } from './pages/syllabus-course/syllabus-course.component';
import { EditLessonComponent } from './pages/edit-lesson/edit-lesson.component';

const routes: Routes = [
  {path: '', component: DefaultPageComponent},
  {path: 'new', component: NewCourseComponent},
  {path: 'syllabus/:id', component: SyllabusCourseComponent},
  {path: 'edit/:id', component: EditCourseComponent},
  {path: 'edit/:idCourse/:idModule/:idLesson', component: EditLessonComponent}
];

@NgModule({
  declarations: [
    DefaultPageComponent,
    NewCourseComponent,
    EditCourseComponent,
    SyllabusCourseComponent,
    EditLessonComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        AngularEditorModule
    ]
})
export class TeachingModule { }
