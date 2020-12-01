import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Advertiser } from '../../../models/advertiser.model'

@Injectable({
  providedIn: 'root'
})
export class AdvertiserService {
  private readonly BASE_URL = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) { }

  login(email, password): Observable<any>{
    return this.httpClient.post(`${this.BASE_URL}/login`, {
      email: email,
      senha: password
    });
  }

  register(advertiser: Advertiser): Observable<any>{
    return this.httpClient.post(`${this.BASE_URL}/anunciantes`, advertiser);
  }
}
