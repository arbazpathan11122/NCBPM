import { Component, OnInit, Inject } from '@angular/core';
import { AlertService } from 'src/app/service/alert.service';

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
  constructor(@Inject(AlertService) private alertService: AlertService) { }

  ngOnInit() {
  }
  generateOTP() {
    this.sendOtpClick = true;
    this.otp = Math.floor(1000 + Math.random() * 9000);

    this.alertService.showInfoAlert('your OTP is  ' + this.otp);

    // swal('your OTP is  ' + this.otp);

  }

  submitSingUpForm() {

    this.alertService.showSuccessAlert('Sing Up Successfuly');
    // swal({
    //   position: 'top-end',
    //   type: 'success',
    //   title: 'Sing Up Successfuly',
    //   showConfirmButton: false,
    //   timer: 1000
    // });
    this.showPasswdTab = true;
  }


  submitPassword() {
    this.alertService.showSuccessAlert('Password Create  Successfuly');

    // swal({
    //   position: 'top-end',
    //   type: 'success',
    //   title: 'Password Create  Successfuly',
    //   showConfirmButton: false,
    //   timer: 700
    // });
  }
}

