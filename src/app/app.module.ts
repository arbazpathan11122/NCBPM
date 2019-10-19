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
import { RouterModule, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';


import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { DndModule } from 'ngx-drag-drop';
import { AuthService } from './service/Auth.service';
// import {  HomeAuthGuard } from './service/auth.guard';


// import { FirebaseUIModule } from 'firebaseui-angular';
// import * as firebase from 'firebase/app';
// import * as firebaseui from 'firebaseui';
// // currently there is a bug while building the app with --prod
// // - https://github.com/RaphaelJenni/FirebaseUI-Angular/issues/76
// // the plugin exposes the two libraries as well. You can use those:
import { FirebaseUIModule, firebase, firebaseui } from 'firebaseui-angular';


const firebaseUiAuthConfig: firebaseui.auth.Config = {
  signInFlow: 'popup',
  signInSuccessUrl: 'https://ncbpm-1.firebaseapp.com/login',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    {
      scopes: [
        'public_profile',
        'email',
        'user_likes',
        'user_friends'
      ],
      customParameters: {
        'auth_type': 'reauthenticate'
      },
      provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID
    },
    // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    // firebase.auth.GithubAuthProvider.PROVIDER_ID,
    {
      requireDisplayName: false,
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      signInMethod: firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD

    },

    firebase.auth.PhoneAuthProvider.PROVIDER_ID,
    // firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
  ],
  tosUrl: 'https://ncbpm-1.firebaseapp.com/page404',
  privacyPolicyUrl: 'https://ncbpm-1.firebaseapp.com/page404',
  credentialHelper: firebaseui.auth.CredentialHelper.ACCOUNT_CHOOSER_COM
};
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
    FirebaseUIModule.forRoot(firebaseUiAuthConfig),
    // SweetAlert2Module.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AppRoutingModule,
    DndModule,


  ],
  providers: [FormService, {
    provide: 'HomeAuthGuard',
    useValue: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => true
  }, AuthService, AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
