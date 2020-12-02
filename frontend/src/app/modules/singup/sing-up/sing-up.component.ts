import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdvertiserService } from 'src/app/shared/services';
import { Advertiser } from '../../../shared/models/advertiser.model';
import { Validacoes } from '../../../shared/utils/validacoes'

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent implements OnInit {
  advertiser: Advertiser;
  formularioDeUsuario: FormGroup;

  constructor(private advertiserService: AdvertiserService, private router: Router,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.advertiser = new Advertiser();
    this.criarFormularioDeUsuario();
  }

  register(){
    this.advertiser.nome = this.nome.value;
    this.advertiser.senha = this.senha.value;
    this.advertiser.email = this.email.value;
    this.advertiser.telefone1 = this.telefone1.value;
    this.advertiser.telefone2 = this.telefone2.value;
    this.advertiser.telefone3 = this.telefone3.value;
    this.advertiser.cpfOuCnpj = this.cnpjCpf.value;

    this.advertiserService.register(this.advertiser).subscribe(
      response => {
        alert("Cadastro realizado com sucesso!!")
        this.router.navigate([`/login`]);
        console.log(response);
        this.formularioDeUsuario.reset();
      },
      error => {
        alert('Não foi possível cadastrar');
      }
    )
  }

  criarFormularioDeUsuario() {
    this.formularioDeUsuario = this.fb.group({
      nome: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(30)
        ])
      ],
      email: [
        '', 
        Validators.compose([
          Validators.required,
          Validators.email
        ])
        ],
      cnpjCpf: [
        '', 
        Validators.compose([
          Validators.required,
          Validacoes.ValidaCpf
        ])
      ],
      senha: ['', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ])],
      telefone1: ['', Validators.compose([Validators.required])],
      telefone2: [''],
      telefone3: ['']
    });
  }

  errorMessageName(){
    if (this.nome.hasError('required')) {
      return 'Nome é obrigatório';
    }else if(this.nome.hasError('minlength')){
      return 'Nome deve ter no mínimo 3 caracteres';
    }else{
      return 'Nome deve ter no máximo 30 caracteres';
    }
  }

  errorMessageEmail(){
    if(this.email.hasError('required')){
      return 'Email é obrigatório';
    }else{
      return 'Digite um email válido'
    }
  }

  errorMessageCpf(){
    if(this.cnpjCpf.hasError('required')){
      return 'Informe seu CPF ou CNPJ'
    }else{
      return 'Inválido'
    }
  }

  errorMessagePassword(){
    if(this.senha.hasError('required')){
      return 'Informe a senha'
    }else if(this.senha.hasError('minlength')){
      return 'Senha deve ter no mínimo 6 caracteres'
    }else{
      return 'Senha deve ter no máximo 30 caracteres'
    }
  }

  errorMessagePhone(){
    if(this.telefone1.hasError('required')){
      return 'Informe pelo menos um número'
    }
  }

  /*
  validPhone(phone) {
    var regex = new RegExp('^\\([0-9]{2}\\)((3[0-9]{3}-[0-9]{4})|(9[0-9]{3}-[0-9]{5}))$');
    return regex.test(phone);
  }*/

  // Propriedades do formulário que vamos utilizar para obter os erros
  get nome() {
    return this.formularioDeUsuario.get('nome');
  }

  get email() {
    return this.formularioDeUsuario.get('email');
  }

  get cnpjCpf() {
    return this.formularioDeUsuario.get('cnpjCpf');
  }

  get senha() {
    return this.formularioDeUsuario.get('senha');
  }

  get telefone1() {
    return this.formularioDeUsuario.get('telefone1');
  }

  get telefone2() {
    return this.formularioDeUsuario.get('telefone2');
  }

  get telefone3() {
    return this.formularioDeUsuario.get('telefone3');
  }
}
