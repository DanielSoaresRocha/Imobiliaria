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
    this.listHouses();
  }

  houseDetails(house: House): void {
    this.router.navigate([`/advertisement/house-details`, house.id]);
  }

  deleteHouse(id: string){
    let del = confirm("Deseja deleter esta casa?");
    if (del == true){
      this.houseService.delete(id).subscribe(
        response => {
          alert('Casa deletada com sucesso!')
          this.listHouses();
        },
        error => alert('Não foi possível deletar esta casa')
      )
    }
  }

  editHouse(house: House){
    this.router.navigate([`/advertiser/register-house`, house.id]);
  }

  listHouses(){
    this.houseService.listByAdvertiser(localStorage.getItem('userId')).subscribe(
      reponse => this.houses = reponse,
      error => alert('Ocorreu um erro')
    )
  }

}
