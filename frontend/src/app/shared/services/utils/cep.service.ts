import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CepService {
  private readonly BASE_URL = 'https://viacep.com.br/ws';

  constructor(private httpClient: HttpClient) { }

  get(cep: string): Observable<any> {
    return this.httpClient.get(`${this.BASE_URL}/${cep}/json`);
  }
}
