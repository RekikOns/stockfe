import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  {
    path:'articles/home',
    component: HomeComponent
  },
  {
    path:'articles/create',
    component: CreateComponent
  },
  {
    path:'articles/edit/:id',
    component: EditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule { }
