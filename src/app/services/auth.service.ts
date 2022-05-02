import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from "rxjs";
import { map } from 'rxjs/operators';
import { Router } from "@angular/router"

import { ILogin, ISignUp } from '../models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly JWT = "JWT_TOKEN"
  private readonly AUTH_DATA = "AUTH_DATA"

  constructor(
      private http: HttpClient,
      private router: Router
  ) { }

  get token(): string | null {
    return sessionStorage.getItem(this.JWT) as string;
  }

  get isLogged(): boolean {
    return !!this.token;
  }

  get currentUser(): any | null {
    return sessionStorage.getItem(this.AUTH_DATA);
  }

  login(data: ILogin): Observable<any> {
    // return this.http.post('api/signin', data).pipe(
    //   map((response: any) => {
    //     sessionStorage.setItem(this.AUTH_DATA, JSON.stringify(data.email));
    //     sessionStorage.setItem(this.JWT, response.accessToken);
    //     return this.currentUser;
    //   })
    // );
    sessionStorage.setItem(this.AUTH_DATA, JSON.stringify(data.email));
    sessionStorage.setItem(this.JWT, "Token");
    return this.currentUser;
  }

  signup(data: ISignUp): Observable<any> {
    return this.http.post('api/registration', data);
  }

  logout(): void {
    sessionStorage.clear();
    this.router.navigateByUrl('/');
  }
}
