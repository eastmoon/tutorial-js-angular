import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/lazy-component', pathMatch: 'full' },
  { path: 'lazy-component', loadChildren: () => import('#projects/lazy-component/lazy.module').then((m) => m.LazyModule) },
  { path: 'lazy-external-module', loadChildren: () => import('#projects/lazy-external-module/lazy.module').then((m) => m.LazyModule) }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
