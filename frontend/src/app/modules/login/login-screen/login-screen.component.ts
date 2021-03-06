import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdvertiserService } from 'src/app/shared/services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent implements OnInit {
  
  loginDeUsuario: FormGroup;


  constructor(private advertiserService: AdvertiserService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginUser();
    
  }

  login(){
    this.advertiserService.login(this.email.value, this.senha.value).subscribe(
      (response) => {
        let token = response.headers.get("Authorization")
        let userId = response.headers.get("user")
        console.log("Token => " + token)
        console.log("IdUsuario => " + userId)
        localStorage.setItem('token', token);
        localStorage.setItem('userId', userId);
        this.router.navigate([`/advertiser/index`]);
      },
      (error) => alert("Login ou senha inválidos")
    )
  }

  loginUser(){
    this.loginDeUsuario = this.fb.group({
      email: [
        '', 
        Validators.compose([
          Validators.required,
          Validators.email
        ])
      ],
      senha: ['', Validators.compose([
        Validators.required,
      ])]
     });
  }

  errorMessageEmail(){
    if(this.email.hasError('required')){
      return 'Email incorreto ou não inserido';
    }
  }
  errorMessageSenha(){
    if(this.senha.hasError('required')){
      return 'Senha incorreta ou não inserido';
    }
  }
  get email() {
    return this.loginDeUsuario.get('email');
  }

  get senha() {
    return this.loginDeUsuario.get('senha');
  }
}
