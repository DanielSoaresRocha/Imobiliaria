import { Component, OnInit } from '@angular/core';
import { HouseService } from 'src/app/shared/services';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css'],
})
export class ClientComponent implements OnInit {
  constructor(private houseService: HouseService) {}

  houses: any;

  minValue = 0;
  maxValue = 0;
  minMeters = 0;
  maxMeters = 0;

  numBedrooms = 0;
  numBathrooms = 0;
  numGarage = 0;

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.houseService.list().subscribe(
      (response) => {
        this.houses = response;
        console.log(response)
      },
      (error) => console.log(error)
    );
  }

  changeMinValue(value: number) {
    this.minValue = value;
    return value;
  }
  
  changeMaxValue(value: number) {
    this.maxValue = value;
    return value;

  }
  
  changeMinMeters(value: number) {
    this.minMeters = value;
    return value;
  }
  
  changeMaxMeters(value: number) {
    this.maxMeters = value;
    return value;
  }

  changeBedroom(num : number){
    if(this.numBedrooms == num){
      this.numBedrooms = 0;
    }else{
      this.numBedrooms = num;
    }
  }
  
  changeBathroom(num : number){
    if(this.numBathrooms == num){
      this.numBathrooms = 0;
    }else{
      this.numBathrooms = num;
    }
  }
  
  changeGarage(num : number){
    if(this.numGarage == num){
      this.numGarage = 0;
    }else{
      this.numGarage = num;
    }
  }
}
