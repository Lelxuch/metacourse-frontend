import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";
import { HTTP_INTERCEPTORS, HttpClientModule}  from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { ApiInterceptor } from "./interceptors/api.interceptor";
import { AppComponent } from './app.component';
import { SharedModule } from "./shared/shared.module";
import { SectionsComponent } from './sections/sections.component';
import { AppRoutingModule } from "./app-routing.module";
import { HeaderComponent } from './sections/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    SectionsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
