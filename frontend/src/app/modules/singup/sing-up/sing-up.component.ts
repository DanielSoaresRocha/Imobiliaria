import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdvertiserService } from 'src/app/shared/services';
import { Advertiser } from '../../../shared/models/advertiser.model'

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent implements OnInit {
  advertiser: Advertiser;

  constructor(private advertiserService: AdvertiserService, private router: Router) { }

  ngOnInit(): void {
    this.advertiser = new Advertiser();
  }

  register(){
    this.advertiserService.register(this.advertiser).subscribe(
      response => {
        alert("Cadastro realizado com sucesso!!")
        this.router.navigate([`/login`]);
        console.log(response);
      },
      error => {
        alert('Não foi possível cadastrar');
      }
    )
  }

}
