import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [

  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'process', pathMatch: 'full' },
      { path: 'form', loadChildren: './form/form.module#FormModule' },
      { path: 'process', loadChildren: './process/process.module#ProcessModule' },
      { path: 'publish', loadChildren: './publish/publish.module#PublishModule' },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
