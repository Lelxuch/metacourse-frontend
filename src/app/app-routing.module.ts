import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectionsComponent } from "./sections/sections.component";

const routes: Routes = [
  {
    path: '', component: SectionsComponent,
    children: [
      {path: '', loadChildren: () => import('./sections/home/home.module').then(m => m.HomeModule)},
      {path: 'auth', loadChildren: () => import('./sections/authorization/authorization.module').then(m => m.AuthorizationModule)},
      {path: 'catalog', loadChildren: () => import('./sections/catalog/catalog.module').then(m => m.CatalogModule)},
      {path: 'education', loadChildren: () => import('./sections/education/education.module').then(m => m.EducationModule)},
      {path: 'creation', loadChildren: () => import('./sections/creation/creation.module').then(m => m.CreationModule)},
      {path: 'profile', loadChildren: () => import('./sections/profile/profile.module').then(m => m.ProfileModule)},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
