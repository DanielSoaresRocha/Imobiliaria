import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListAdvertisementService {
  private readonly BASE_URL = 'http://localhost:8080/produtos/residencia';

  constructor(private httpClient: HttpClient) {}

  list(): Observable<any> {
    return this.httpClient.get(this.BASE_URL);
  }
}
