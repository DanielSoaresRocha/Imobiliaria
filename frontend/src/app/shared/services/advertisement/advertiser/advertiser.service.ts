import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdvertiserService {
  private readonly BASE_URL = 'http://localhost:8080/login';

  constructor(private httpClient: HttpClient) { }

  login(email, password): Observable<any>{
    return this.httpClient.post(`${this.BASE_URL}`, {
      email: email,
      senha: password
    });
  }
}
