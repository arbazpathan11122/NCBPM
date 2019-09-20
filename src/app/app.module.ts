import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { ErrorPageComponent } from './pages/404/error-page.component';
import { SignupComponent } from './pages/signup/signup.component';
import { FormService } from './service/form.service';
import { AlertService } from './service/alert.service';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { DndModule } from 'ngx-drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    LoginComponent,
    SignupComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AppRoutingModule,
    DndModule,


  ],
  providers: [FormService, AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
