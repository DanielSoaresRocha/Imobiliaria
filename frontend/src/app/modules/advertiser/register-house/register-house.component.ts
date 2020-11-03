import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-house',
  templateUrl: './register-house.component.html',
  styleUrls: ['./register-house.component.css']
})
export class RegisterHouseComponent implements OnInit {
  stage = 1;

  constructor() { }

  ngOnInit(): void {
  }

  changeStage(respostaFilho) {
    this.stage = respostaFilho.stage;
  }

}
