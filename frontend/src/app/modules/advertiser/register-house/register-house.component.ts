import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  edit = false;
  param: string;

  constructor(private houseService: HouseService, private router: Router,
    private activatedRoute: ActivatedRoute) {
    this.param = this.activatedRoute.snapshot.paramMap.get('id');
    
    if(this.param != "-1")
      this.editHouse();
    else
      this.house = new House();
  }

  ngOnInit(): void {
  }

  editHouse(){
    this.houseService.findById(this.param).subscribe(
        response => {
           this.house = response;
           this.edit = true;
        },
        error => alert('Ocorreu um erro ao tentar retornar esta casa')
    )
  }

  changeStage(numStage) {
    this.stage = numStage.stage;
    console.log(this.house);
  }

  finish(){
    this.houseService.create(this.house).subscribe(
      response => this.router.navigate(['/advertiser/index']),
      err => {
        console.log(err);
        alert('Não foi possível cadastrar');
      }
    )
  }

}
