import { Component, OnInit, Inject, } from '@angular/core';
import { AlertService } from 'src/app/service/alert.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/service/Auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = {
    userName: '',
    password: '',
  };
  userPhone = {
    phone: '',
    otp: null,

  };



  actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be whitelisted in the Firebase Console.
    url: 'https://www.example.com/finishSignUp?cartId=1234',
    // This must be true.
    handleCodeInApp: true,
    iOS: {
      bundleId: 'com.example.ios'
    },
    android: {
      packageName: 'com.example.android',
      installApp: true,
      minimumVersion: '12'
    },
    dynamicLinkDomain: 'example.page.link'
  };


  otp: number;
  emailTabActive = true;
  sendOtpClick = false;


  ui: any;




  constructor(
    @Inject(Router) private router: Router,
    @Inject(AlertService) private alertService: AlertService,
    @Inject(AuthService) private authService: AuthService,

  ) {

    const user = JSON.parse(localStorage.getItem('user'));

    if (user !== null) {
      this.router.navigate(['/home']);

    }
    console.log(this.authService.isLoggedIn());

  }




  ngOnInit() {


    // this.afAuth.auth.onAuthStateChanged((user) => {
    //   if (user) {
    //     // User is signed in.
    //     const userdetails = {
    //       name: user.displayName,
    //       email: user.email,
    //       phone: user.phoneNumber,
    //       photoUrl: user.photoURL,
    //       uid: user.uid
    //     };
    //     console.log(user);
    //     localStorage.setItem('User', JSON.stringify(userdetails));

    //     // this.router.navigate(['/home']);
    //   } else {
    //     // this.router.navigate(['/signUp']);

    //   }
    // });
  }


  changeTabe(val) {
    this.emailTabActive = val;
  }

  generateOTP() {
    this.sendOtpClick = true;
    this.otp = Math.floor(1000 + Math.random() * 9000);


    this.alertService.showInfoAlert('your OTP is  ' + this.otp);

    // swal('your OTP is  ' + this.otp);
  }


  LoginwithEmail() {
    this.authService.SignIn(this.user.userName, this.user.password);
  }


  LoginwithPhoneNo() {

  }


  ForgotPassword(passwordResetEmail) {

  }





















  // if (this.afAuth.auth.isSignInWithEmailLink(window.location.href)) {
  //   // Additional state parameters can also be passed via URL.
  //   // This can be used to continue the user's intended action before triggering
  //   // the sign-in operation.
  //   // Get the email if available. This should be available if the user completes
  //   // the flow on the same device where they started it.
  //   let email = window.localStorage.getItem('emailForSignIn');
  //   if (!this.user.userName) {
  //     // User opened the link on a different device. To prevent session fixation
  //     // attacks, ask the user to provide the associated email again. For example:
  //     email = window.prompt('Please provide your email for confirmation');
  //   }
  //   // The client SDK will parse the code from the link for you.
  //   this.afAuth.auth.signInWithEmailLink(email, window.location.href)
  //     .then((result) => {
  //       // Clear email from storage.
  //       window.localStorage.removeItem('emailForSignIn');
  //       // You can access the new user via result.user
  //       // Additional user info profile not available via:
  //       // result.additionalUserInfo.profile == null
  //       // You can check if the user is new or existing:
  //       // result.additionalUserInfo.isNewUser
  //     })
  //     .catch((error) => {
  //       // Some error occurred, you can inspect the code: error.code
  //       // Common errors could be invalid email and invalid or expired OTPs.
  //     });
  // }









  // this.RegisterwithEmaiPassword(this.user.userName, this.user.password).then((docRef) => {
  //   console.log(docRef);
  //   this.alertService.showSuccessAlert('Login Up Successfuly');
  // }).catch((error) => {
  //   this.alertService.showInfoAlert('Error adding document: ');

  // });

  // swal({
  //   position: 'top-end',
  //   type: 'success',
  //   title: 'Login Successfuly',
  //   showConfirmButton: false,
  //   timer: 300
  // });
  // }
}


