import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from "@angular/router";
import { House } from 'src/app/shared/models/house.model';
import { CepService } from '../../../../shared/services/utils'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  @Output() stageEmit = new EventEmitter();
  @Input() house: House;

  constructor(private router: Router, private cepService: CepService) { }

  ngOnInit(): void {
  }

  goToPrice() {
    this.stageEmit.emit({"stage": 2});
  }

  cancel(){
    this.router.navigate(['/']);
    this.stageEmit.emit({"stage": 0});
  }

  searchCep(valor){
    let cep = valor.replace(/\D/g, '');

     if (cep != "") {
        //Expressão regular para validar o CEP.
        var validacep = /^[0-9]{8}$/;

        if(validacep.test(cep)) {
          this.house.bairro = 'Carregando..';
          this.house.cidade = 'Carregando..';
          this.house.logradouro = 'Carregando..';
          this.house.estado = 'Carregando..'

          this.cepService.get(cep).subscribe(
            response => {
              this.house.bairro = response.bairro;
              this.house.cidade = response.localidade;
              this.house.logradouro = response.logradouro;
              this.house.estado = response.uf;
              if(response.error){
                alert('O cep informado não existe')
              }
            },
            error => {
              alert('Ocorreu um erro ao tentar buscar este cep')
            }
          )
        }else{
          alert('Verifique se o cep é válido')
        }
     }
  }

}
