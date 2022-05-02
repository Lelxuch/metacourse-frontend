import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

import { DefaultPageComponent } from './pages/default-page/default-page.component';
import {SharedModule} from "../../shared/shared.module";
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';

const routes: Routes = [
  {path: '', component: DefaultPageComponent},
  {path: 'search', component: SearchPageComponent}
];

@NgModule({
  declarations: [
    DefaultPageComponent,
    SearchBarComponent,
    SearchPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class CatalogModule { }
