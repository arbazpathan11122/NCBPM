import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormViewComponent } from './formview.component';

const routes: Routes = [

  {
    path: '',
    component: FormViewComponent,
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormViewRoutingModule { }
