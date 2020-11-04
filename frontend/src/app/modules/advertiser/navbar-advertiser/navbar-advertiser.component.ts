import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-advertiser',
  templateUrl: './navbar-advertiser.component.html',
  styleUrls: ['./navbar-advertiser.component.css']
})
export class NavbarAdvertiserComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  backToHome(){
    this.router.navigate(['/']);
  }

}
