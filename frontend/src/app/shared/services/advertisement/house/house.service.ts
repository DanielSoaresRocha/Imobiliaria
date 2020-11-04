import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { House } from '../../../models/house.model'

@Injectable({
  providedIn: 'root',
})
export class HouseService {
  private readonly BASE_URL = 'http://localhost:8080/produtos';

  constructor(private httpClient: HttpClient) {}

  list(): Observable<any> {
    return this.httpClient.get(`${this.BASE_URL}/residencia`);
  }

  create(house : House):Observable<any>{
    return this.httpClient.post(`${this.BASE_URL}/residencia`, house);
  }
}
