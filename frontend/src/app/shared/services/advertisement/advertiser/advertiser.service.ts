import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Advertiser } from '../../../models/advertiser.model'

@Injectable({
  providedIn: 'root'
})
export class AdvertiserService {
  private readonly BASE_URL = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) { }

  login(email, password): Observable<any>{
    let body = {
      email: email,
      senha: password,
    }

    return this.httpClient.post(`${this.BASE_URL}/login`, body, {
      observe: 'response'
    });
  }

  register(advertiser: Advertiser): Observable<any>{
    return this.httpClient.post(`${this.BASE_URL}/anunciantes`, advertiser);
  }
}
