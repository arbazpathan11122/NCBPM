import { Component, OnInit, Inject } from '@angular/core';
import { AlertService } from 'src/app/service/alert.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/Auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  user = {
    name: '',
    email: '',
    phone: '',
    otp: null
  };
  sendOtpClick = false;
  otp: number;

  showPasswdTab = false;
  password = {
    paswd: '',
    confirmPaswd: ''
  };
  userData: any; // Save logged in user data

  constructor(
    @Inject(Router) private router: Router,
    @Inject(AlertService) private alertService: AlertService,
    @Inject(AuthService) private authService: AuthService,
    @Inject(AngularFireAuth) public afAuth: AngularFireAuth, // Inject Firebase auth service


  ) {


  }

  ngOnInit() {
  }
  generateOTP() {
    this.sendOtpClick = true;
    this.otp = Math.floor(1000 + Math.random() * 9000);

    this.alertService.showInfoAlert('your OTP is  ' + this.otp);

    // swal('your OTP is  ' + this.otp);

  }

  submitSingUpForm() {
    this.showPasswdTab = true;
  }

  submitPassword() {
    this.authService.SignUp(this.user, this.password.paswd);
    // this.afAuth.auth.createUserWithEmailAndPassword(this.user.email, this.password.paswd).then((userCredential) => {
    //   userCredential.useir.updateProfile({
    //     displayName: ths.user.name,
    //     // phoneNumber: this.user.phone
    //   });
    //   // this.insertUserData(userCredential).then(() => {
    //   //   this.router.navigate(['/home']);
    //   // });
    // }).catch((error) => {
    //   this.showPasswdTab = false;

    //   this.alertService.showErrorAlert(error.message);
    // });
  }

  // insertUserData(userCredential: firebase.auth.UserCredential) {
  //   return this.firestore.doc(`Users/${userCredential.user.uid}`).set({
  //     email: this.user.email,
  //     firstName: this.user.name,
  //     phone: this.user.phone,
  //     role: 'admin'
  //   });
  // }

}

