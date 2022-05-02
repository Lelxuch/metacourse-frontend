import { Injectable } from '@angular/core';

import { AuthService } from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class PermissionService {

  constructor(
      private authService: AuthService
  ) { }

  getDefaultSection(): string {
    return '/courses/catalog';
  }
}
