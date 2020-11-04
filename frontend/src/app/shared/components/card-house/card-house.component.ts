import { Component, Input, OnInit } from '@angular/core';
import { House } from '../../models/house.model';

@Component({
  selector: 'app-card-house',
  templateUrl: './card-house.component.html',
  styleUrls: ['./card-house.component.css']
})
export class CardHouseComponent implements OnInit {
  @Input() house: House;

  constructor() { }

  ngOnInit(): void {
  }

}
