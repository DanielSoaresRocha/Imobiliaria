import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // usando rotas:
  // https://www.techiediaries.com/angular-router-routerlink-navigate-navigatebyurl/
  goToPrice() {
    this.router.navigate(['/advertiser/register-house/price']);
  }

  cancel(){
    this.router.navigate(['/']);
  }

}
