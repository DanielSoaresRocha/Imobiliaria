import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {
  checkCondominio = false;
  checkIPTU = false;
  isVenda = true;
  @Output() stageEmit = new EventEmitter();
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToPhotos(){
    this.stageEmit.emit({stage: 3});
  }
  
  back(){
    this.stageEmit.emit({stage: 1});
  }

  changeIsVenda(venda : boolean){
    this.isVenda = venda;
  }

}
