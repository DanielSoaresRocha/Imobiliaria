import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { House } from '../../models/house.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-card-house',
  templateUrl: './card-house.component.html',
  styleUrls: ['./card-house.component.css']
})
export class CardHouseComponent implements OnInit {

  titleForm: FormGroup;

  @Input() house: House;
  @Input() anunciante: boolean = false;
  @Input() visualizar: boolean = false;
  @Input() acoes: boolean = false;

  @Output() change = new EventEmitter();
  @Output() delete = new EventEmitter();
  @Output() view = new EventEmitter();
  @Output() edit = new EventEmitter();

  @Input() observer;
  @Input() editing = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createTitleForm();
    if(this.editing){
      this.observer.subscribe(val => {
        this.fillName(val);
      })
    }
  }

  formatValue(value: number): string{
    if(value != null)
      return value.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
    else
      return ''
  }

  createTitleForm(){
    this.titleForm = this.fb.group({
      nome: [
        '',
        Validators.compose([
          Validators.maxLength(50),
          Validators.required,
        ])
      ]
    })
  }

  errorMessageTitulo(){
    if(this.nome.hasError('required')){
      return 'Para concluir é necessário inserir um titulo para o seu anúncio'
    }else{
      this.house.nome = this.nome.value;
    }
  }

  fillName({house}){
    this.nome.setValue(house.nome);
  }

  changeName(){
    this.change.emit({
      name: this.nome.value,
      disabled: this.nome.invalid
    })
  }

  clickDelete(){
    this.delete.emit();
  }

  clickView(){
    this.view.emit();
  }

  clickEdit(){
    this.edit.emit();
  }

  get nome(){
    return this.titleForm.get('nome');
  }
}
