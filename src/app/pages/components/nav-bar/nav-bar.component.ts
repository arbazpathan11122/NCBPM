import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(
    @Inject(Router) private router: Router,

  ) { }

  ngOnInit() {
  }
  goToProcess() {
    this.router.navigate(['/home']);
  }
}
