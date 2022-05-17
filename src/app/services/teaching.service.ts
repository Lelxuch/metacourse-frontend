import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from "rxjs";

import { ICourse } from "../models/teaching.model";

@Injectable({
  providedIn: 'root'
})
export class TeachingService {

  modules: any = [
    {
      moduleName: "Module 1",
      lessons: [
        {
          lessonName: "Lesson 1"
        },
        {
          lessonName: "Lesson 2"
        }
      ]
    },
    {
      moduleName: "Module 2",
      lessons: [
        {
          lessonName: "Lesson 1"
        },
        {
          lessonName: "Lesson 2"
        },
        {
          lessonName: "Lesson 3"
        }
      ]
    },
  ]

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

  /* Lessons */
  createLesson(id: number) {
    return this.http.post(`/api/lesson/${id}`, id);
  }

  editLesson(id: number, lesson: any) {
    return this.http.put(`/api/lesson/${id}`, lesson);
  }

  /* Categories */
  getCategories() {
    return this.http.get('/api/category/list');
  }

  constructor(
      private http: HttpClient
  ) { }
}
