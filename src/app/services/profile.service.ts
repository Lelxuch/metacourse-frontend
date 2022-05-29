import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
      private http: HttpClient
  ) { }

  updateUser(user: any) {
    return this.http.put(`/api/user/${user.id}`, user)
  }
}
