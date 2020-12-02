import { Component, OnInit } from '@angular/core';
import { House } from 'src/app/shared/models/house.model';
import { HouseService } from '../../../shared/services/advertisement/house'

@Component({
  selector: 'app-adverts',
  templateUrl: './adverts.component.html',
  styleUrls: ['./adverts.component.css']
})
export class AdvertsComponent implements OnInit {
  houses: House[];

  constructor(private houseService: HouseService) { }

  ngOnInit(): void {
    this.houseService.listByAdvertiser("2").subscribe(
      reponse => this.houses = reponse,
      error => alert('Ocorreu um erro')
    )
  }

}
