import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(
      private http: HttpClient
  ) { }

  getRecommendations() {
    return this.http.get(`/api/`)
  }

  getCategories() {
    return this.http.get('/api/category/list');
  }
}
