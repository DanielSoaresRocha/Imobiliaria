import { Component, OnInit } from '@angular/core';
import { House } from 'src/app/shared/models/house.model';

@Component({
  selector: 'app-adverts',
  templateUrl: './adverts.component.html',
  styleUrls: ['./adverts.component.css']
})
export class AdvertsComponent implements OnInit {
  house = new House(600, 4, 2, 6, 'Casa muito engraçada', 500000);

  constructor() { }

  ngOnInit(): void {
  }

}
