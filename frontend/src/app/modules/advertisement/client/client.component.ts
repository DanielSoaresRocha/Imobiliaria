import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { House } from 'src/app/shared/models/house.model';
import { HouseService } from 'src/app/shared/services';
import { HouseFilter } from '../../../shared/models/house-filter.model'

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css'],
})
export class ClientComponent implements OnInit {
  houses: any;
  filter: HouseFilter;

  constructor(private houseService: HouseService, private router: Router) {
    this.filter = new HouseFilter();
  }
  
  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.houseService.list().subscribe(
      (response) => {
        this.houses = response;
        //console.log(response)
      },
      (error) => console.log(error)
    );
  }

  listFilter(){
    this.houseService.listFilter(this.filter).subscribe(
      (response) =>{
        this.houses = response;
        console.log(response);
      },
      (error) => console.log(error)
    );
  }

  changeBedroom(num : number){
    if(this.filter.qtdBedrooms == num){
      this.filter.qtdBedrooms = 0;
    }else{
      this.filter.qtdBedrooms = num;
    }

    this.listFilter();
  }
  
  changeBathroom(num : number){
    if(this.filter.qtdBathrooms == num){
      this.filter.qtdBathrooms = 0;
    }else{
      this.filter.qtdBathrooms = num;
    }

    this.listFilter();
  }
  
  changeGarage(num : number){
    if(this.filter.qtdGarage == num){
      this.filter.qtdGarage = 0;
    }else{
      this.filter.qtdGarage = num;
    }
    this.listFilter();
  }

  houseDetails(house: House): void {
    this.router.navigate([`/advertisement/house-details`, house.id]);
  }
}
