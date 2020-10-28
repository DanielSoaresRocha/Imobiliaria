import { Component, OnInit } from '@angular/core';
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

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToPhotos(){
    this.router.navigate(['/advertiser/register-house/photos']);
  }
  
  back(){
    this.router.navigate(['/advertiser/register-house/about']);
  }

  changeIsVenda(venda : boolean){
    this.isVenda = venda;
  }

}
