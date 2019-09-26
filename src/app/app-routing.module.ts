import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ErrorPageComponent } from './pages/404/error-page.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeAuthGuard } from './service/auth.guard';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'login', component: LoginComponent, },
  { path: 'signUp', component: SignupComponent, },
  {
    path: 'home', loadChildren: './pages/admin/admin.module#AdminModule', canActivate: ['HomeAuthGuard']
  },
  { path: 'formView', loadChildren: './pages/admin/formview/formview.module#FormViewModule' },
  { path: '**', redirectTo: '/page404' },
  { path: 'page404', component: ErrorPageComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [HomeAuthGuard]
})
export class AppRoutingModule { }
