import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './product/edit/edit.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component'



const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'products',
    children: [
      {
        path: '',
        component: ProductComponent,
        pathMatch: 'full',
      },
      {
        path: 'edit/:id',
        component: EditComponent,
        pathMatch: 'full',
      },
      {
        path: 'new',
        component: CreateComponent,
        pathMatch: 'full',
      },
    ]
  },

  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
