import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout.component';
import { layoutRoutes } from './layout/layout/layout.routes';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: layoutRoutes
},
{ path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
