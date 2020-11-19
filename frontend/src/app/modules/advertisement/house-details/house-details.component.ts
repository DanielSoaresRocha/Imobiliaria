import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { House } from 'src/app/shared/models/house.model';
import { HouseService } from 'src/app/shared/services';

@Component({
  selector: 'app-house-details',
  templateUrl: './house-details.component.html',
  styleUrls: ['./house-details.component.css']
})
export class HouseDetailsComponent implements OnInit {
  idHouse: string;
  house: House;

  constructor(private activatedRoute: ActivatedRoute, private houseService: HouseService) {
    this.idHouse = this.activatedRoute.snapshot.paramMap.get('id');
    this.house = new House();
  }

  ngOnInit(): void {
    this.houseService.findById(this.idHouse).subscribe(
      (response) => {
        this.house = response;
      },
      (error) => console.log(error)
    )
  }

  formatValue(value: number): string{
    if(value != null)
      return value.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
    else
      return ''
  }

}
