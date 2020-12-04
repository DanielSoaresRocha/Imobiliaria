import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { House } from 'src/app/shared/models/house.model';
import { HouseService } from '../../../shared/services/advertisement/house'

@Component({
  selector: 'app-adverts',
  templateUrl: './adverts.component.html',
  styleUrls: ['./adverts.component.css']
})
export class AdvertsComponent implements OnInit {
  houses: House[];

  constructor(private houseService: HouseService, private router: Router) { }

  ngOnInit(): void {
    this.houseService.listByAdvertiser("2").subscribe(
      reponse => this.houses = reponse,
      error => alert('Ocorreu um erro')
    )
  }

  houseDetails(house: House): void {
    this.router.navigate([`/advertisement/house-details`, house.id]);
  }

}
