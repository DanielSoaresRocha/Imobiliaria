import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  // usando rotas:
  // https://www.techiediaries.com/angular-router-routerlink-navigate-navigatebyurl/
  goToPrice() {
    this.router.navigate(['/advertiser/register-house/price']);
    console.log("sdfasd");
  }

}
