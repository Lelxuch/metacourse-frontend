import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { EmptyBlockComponent } from './components/empty-block/empty-block.component';


@NgModule({
  declarations: [
    EmptyBlockComponent
  ],
  exports: [
    EmptyBlockComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
