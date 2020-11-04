import { Component, OnInit } from '@angular/core';
import { House } from 'src/app/shared/models/house.model';
import {HouseService} from 'src/app/shared/services'

@Component({
  selector: 'app-register-house',
  templateUrl: './register-house.component.html',
  styleUrls: ['./register-house.component.css']
})
export class RegisterHouseComponent implements OnInit {
  stage = 1;
  house: House;

  constructor(private houseService: HouseService) { }

  ngOnInit(): void {
    this.house = new House();
  }

  changeStage(numStage) {
    this.stage = numStage.stage;
    console.log(this.house);
  }

  finish(){
    this.houseService.create(this.house).subscribe(
      x => console.log('Deu certo' + x),
      err => console.error('Deu errado' + err)
    )
  }

}
