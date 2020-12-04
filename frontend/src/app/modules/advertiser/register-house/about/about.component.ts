import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from "@angular/router";
import { House } from 'src/app/shared/models/house.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  @Output() stageEmit = new EventEmitter();
  @Input() house: House;

  aboutForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder ) { }

  ngOnInit(): void {
    this.createAboutForm();
  }

  goToPrice() {

    this.house.cep = this.cep.value;
    this.house.estado = this.estado.value;
    this.house.cidade = this.cidade.value;
    this.house.bairro = this.bairro.value;
    this.house.logradouro = this.rua.value;
    this.house.numero = this.numero.value;
    this.house.complemento = this.complemento.value;
    this.house.metrosQuadrados = this.metrosQuadrados.value;
    this.house.qtdQuartos = this.qtdQuartos.value;
    this.house.qtdBanheiros = this.qtdBanheiros.value;
    this.house.qtdVagasNaGaragem = this.qtdVagasNaGaragem.value;
    this.house.descricao = this.descricao.value;

    this.stageEmit.emit({"stage": 2});
  }

  cancel(){
    this.router.navigate(['/']);
    this.stageEmit.emit({"stage": 0});
  }

  createAboutForm(){
    this.aboutForm = this.fb.group({
      cep: [
        '',
        Validators.compose([
          Validators.required
        ])
      ],
      estado: [
        '',
        Validators.compose([
          Validators.required
        ])
      ],
      
      cidade: [
        '',
        Validators.compose([
          Validators.required
        ])
      ],
      bairro:[
        '',
        Validators.compose([
          Validators.required
        ])
      ],
      rua: [
        '',
        Validators.compose([
          Validators.required
        ])
      ],
      numero: [
        '',
        Validators.compose([
          Validators.required
        ])
      ],
      complemento: [
        '',
      ],
      metrosQuadrados: [
        '',
        Validators.compose([
          Validators.required
        ])
      ],
      qtdQuartos: [
        '',
        Validators.compose([
          Validators.required,
        ])
      ],
      qtdBanheiros: [
        '',
        Validators.compose([
          Validators.required,
        ])
      ],
      qtdVagasNaGaragem: [
        '',
        Validators.compose([
          Validators.required,
        ])
      ],
      descricao: [
        '',
      ]

    })
  }

  errorMessageCep(){
    if(this.cep.hasError('required')){
      return 'CEP é obrigatório';
    }
  }
  
  errorMessageEstado(){
    if(this.estado.hasError('required')){
      return 'Requerido Preencher com o CEP'
    }
  }

  errorMessageCidade(){
    if(this.cidade.hasError('required')){
      return 'Requerido preencher a cidade'
    }
  }

  errorMessageBairro(){
    if(this.bairro.hasError('required')){
      return 'Requerido preencher o bairro'
    }
  }

  errorMessageRua(){
    if(this.rua.hasError('required')){
      return 'Requerido preencher a rua '
    }
  }

  errorMessageNumero(){
    if(this.numero.hasError('required')){
      return 'Requerido preencher com o número do imóvel'
    }
  }

  errorMessageMetrosQuadrados(){
    if(this.metrosQuadrados.hasError('required')){
      return 'Requerido preencher'
    }
  }

  errorMessageQuartos(){
    if(this.qtdQuartos.hasError('required')){
      return 'Número de quartos é requerido'
    }
  }

  errorMessageBanheiros(){
    if(this.qtdBanheiros.hasError('required')){
      return 'Número de banheiros é requerido'
    }
  }

  errorMessageGarage(){
    if(this.qtdVagasNaGaragem.hasError('required')){
      return 'Vagas na garagem é requerido'
    }
  }


  get cep(){
    return this.aboutForm.get('cep');
  }

  get estado(){
    return this.aboutForm.get('estado');
  }

  get cidade(){
    return this.aboutForm.get('cidade');
  }

  get bairro(){
    return this.aboutForm.get('bairro');
  }

  get rua(){
    return this.aboutForm.get('rua')
  }

  get numero(){
    return this.aboutForm.get('numero');
  }

  get complemento(){
    return this.aboutForm.get('complemento');
  }

  get metrosQuadrados(){
    return this.aboutForm.get('metrosQuadrados');
  }
  
  get qtdQuartos(){
    return this.aboutForm.get('qtdQuartos');
  }

  get qtdBanheiros(){
    return this.aboutForm.get('qtdBanheiros');
  }

  get qtdVagasNaGaragem(){
    return this.aboutForm.get('qtdVagasNaGaragem');
  }

  get descricao(){
    return this.aboutForm.get('descricao');
  }
}