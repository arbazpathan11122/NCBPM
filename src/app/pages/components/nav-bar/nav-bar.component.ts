import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AlertService } from 'src/app/service/alert.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  user: any;
  constructor(
    @Inject(Router) private router: Router,
    @Inject(AlertService) private alertService: AlertService,
    @Inject(AngularFireAuth) private afAuth: AngularFireAuth,

  ) {

    this.user = {
      name: 'nyaz khan',
      email: 'khannyaz1705@gmail.com',
      phone: 9017697290,
      role: 'Admin'
    };

    // JSON.parse(localStorage.getItem('User'));

  }

  ngOnInit() {
  }
  goToProcess() {
    this.alertService.showLoader('Loading....');
    this.router.navigate(['/home']);
  }


  SignOut() {
    return this.afAuth.auth.signOut().then(() => {
      localStorage.clear();
      this.router.navigate(['/login']);
    });
  }
}
