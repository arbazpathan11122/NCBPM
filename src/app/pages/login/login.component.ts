import { Component, OnInit, Inject,  } from '@angular/core';
import { AlertService } from 'src/app/service/alert.service';

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
  otp: number;
  emailTabActive = true;
  sendOtpClick = false;
  constructor(@Inject(AlertService) private alertService: AlertService) { }



  ngOnInit() {
  }
  changeTabe(val) {
    this.emailTabActive = val;
  }
  // login(user) {
  //   if (user.userName === 'Nyazkhan1996' && user.password === '12345678') {
  //     this.router.navigate(['/home']);
  //   }
  // }
  generateOTP() {
    this.sendOtpClick = true;
    this.otp = Math.floor(1000 + Math.random() * 9000);


    this.alertService.showInfoAlert('your OTP is  ' + this.otp);

    // swal('your OTP is  ' + this.otp);
  }


  login() {

    this.alertService.showSuccessAlert('Login Up Successfuly');


    // swal({
    //   position: 'top-end',
    //   type: 'success',
    //   title: 'Login Successfuly',
    //   showConfirmButton: false,
    //   timer: 300
    // });
  }
}


