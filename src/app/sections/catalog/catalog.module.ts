import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

import { DefaultPageComponent } from './pages/default-page/default-page.component';
import { SharedModule } from "../../shared/shared.module";
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { CourseViewPageComponent } from './pages/course-view-page/course-view-page.component';
import { LessonViewPageComponent } from './pages/lesson-view-page/lesson-view-page.component';

const routes: Routes = [
  {path: '', component: DefaultPageComponent},
  {path: 'search', component: SearchPageComponent},
  {path: ':idCourse', component: CourseViewPageComponent},
  {path: ':idCourse/:idModule/:idLesson', component: LessonViewPageComponent}
];

@NgModule({
  declarations: [
    DefaultPageComponent,
    SearchBarComponent,
    SearchPageComponent,
    CourseViewPageComponent,
    LessonViewPageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class CatalogModule { }
