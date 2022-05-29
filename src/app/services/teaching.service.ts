import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from "rxjs";

import { ICourse } from "../models/teaching.model";

@Injectable({
  providedIn: 'root'
})
export class TeachingService {

  /* Course */
  createCourse(course: any) {
    return this.http.post('/api/course/', course);
  }

  getCourses() {
    return this.http.get('/api/course/');
  }

  getCourse(id: number) {
    return this.http.get(`/api/course/${id}`)
  }

  /* Modules */
  createModule(id: number) {
    return this.http.post(`/api/module/${id}`, id)
  }

  editModule(id: number, module: any) {
    return this.http.put(`/api/module/${id}`, module)
  }

  getModule(id: number) {
    return this.http.get(`/api/module/${id}`);
  }

  /* Lessons */
  createLesson(id: number) {
    return this.http.post(`/api/lesson/${id}`, id);
  }

  editLesson(id: number, lesson: any) {
    return this.http.put(`/api/lesson/${id}`, lesson);
  }

  getLesson(id: number) {
    return this.http.get(`/api/lesson/${id}`)
  }

  createText(id: number) {
    return this.http.post(`/api/text/${id}`, id)
  }

  putText(text: any) {
    return this.http.put(`/api/text/${text.id}`, text)
  }

  /* Categories */
  getCategories() {
    return this.http.get('/api/category/list');
  }

  constructor(
      private http: HttpClient
  ) { }
}
