import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdvertiserService } from 'src/app/shared/services';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent implements OnInit {
  email: string;
  password: string;

  constructor(private advertiserService: AdvertiserService, private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    this.advertiserService.login(this.email, this.password).subscribe(
      (response) => {
        this.router.navigate([`/advertisement/client`]);
        console.log(response)
      },
      (error) => console.log(error)
    )
  }

}
