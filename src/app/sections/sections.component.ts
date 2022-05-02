import { Component, OnInit } from '@angular/core';
import { UpperCasePipe } from "@angular/common";

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss'],
  providers: [
    UpperCasePipe
  ]
})
export class SectionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
