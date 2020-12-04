import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { House } from 'src/app/shared/models/house.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {
  checkCondominio = false;
  checkIPTU = false;
  isVenda = true;

  priceForm: FormGroup;

  @Output() stageEmit = new EventEmitter();
  @Input() house: House;
  
  constructor(private router: Router, private fb: FormBuilder ) { }

  ngOnInit(): void {
    this.createPriceForm();
  }

  changeCondominio(){
    this.checkCondominio = !this.checkCondominio
  }

  changeIPTU(){
    this.checkIPTU = !this.checkIPTU
  }

  goToPhotos(){
    this.house.isVenda = this.isVenda;
    this.house.valorIptu = this.iptu.value;
    this.house.valorCondominio = this.condominio.value;

    if(!this.checkCondominio)
      this.house.valorCondominio = 0;
    if(!this.checkIPTU)
      this.house.valorIptu = 0;

    this.stageEmit.emit({stage: 3});

    this.house.valor = this.valor.value;
  }
  
  back(){
    this.stageEmit.emit({stage: 1});
  }

  changeIsVenda(venda : boolean){
    this.isVenda = venda;
  }

  createPriceForm(){
    this.priceForm = this.fb.group({
      valor: [
        '',
        Validators.compose([
          Validators.required
        ])
      ],
      iptu:[
        ''
      ],
      condominio:[
        ''
      ]
    })
  }

  errorMessageValor(){
    if(this.valor.hasError('required')) {
      return 'Valor do imóvel deve ser inserido'
    }
  }

  get valor(){
    return this.priceForm.get('valor');
  }

  get condominio(){
    return this.priceForm.get('condominio');
  }

  get iptu(){
    return this.priceForm.get('iptu');
  }

}
