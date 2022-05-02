import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

import { DefaultPageComponent } from './pages/default-page/default-page.component';
import {SharedModule} from "../../shared/shared.module";

const routes: Routes = [
  {path: '', component: DefaultPageComponent },
];


@NgModule({
  declarations: [
    DefaultPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class EducationModule { }
