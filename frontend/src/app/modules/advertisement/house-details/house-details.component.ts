import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-house-details',
  templateUrl: './house-details.component.html',
  styleUrls: ['./house-details.component.css']
})
export class HouseDetailsComponent implements OnInit {
  slideConfig = {"slidesToShow": 4, "slidesToScroll": 4};
  
  constructor() { }

  ngOnInit(): void {
  }

}
