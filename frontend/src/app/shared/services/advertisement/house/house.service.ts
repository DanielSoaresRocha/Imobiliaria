import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { House } from '../../../models/house.model'
import { HouseFilter } from '../../../models/house-filter.model'

@Injectable({
  providedIn: 'root',
})
export class HouseService {
  
  private readonly BASE_URL = 'http://localhost:8080/produtos';

  constructor(private httpClient: HttpClient) {}

  list(): Observable<any> {
    return this.httpClient.get(`${this.BASE_URL}/residencia`);
  }

  listFilter(filter: HouseFilter): Observable<any>{
    filter.minValue = filter.minValue === null ? 0 : filter.minValue;
    filter.maxValue = filter.maxValue === null ? 0 : filter.maxValue;
    filter.minMeters = filter.minMeters === null ? 0 : filter.minMeters;
    filter.maxMeters = filter.maxMeters === null ? 0 : filter.maxMeters;

    let params = new HttpParams()
      .set('minValor', filter.minValue+'')
      .set('maxValor', filter.maxValue+'')
      .set('minMetrosQuadrados', filter.minMeters+'')
      .set('maxMetrosQuadrados', filter.maxMeters+'')
      .set('qtdBanheiros', filter.qtdBathrooms+'')
      .set('qtdQuartos', filter.qtdBedrooms+'')
      .set('qtdVagasNaGaragem', filter.qtdGarage+'');

    console.log(params.toString());
    
    return this.httpClient.get(`${this.BASE_URL}/residencia`, {params})
  }

  create(house : House):Observable<any>{
    return this.httpClient.post(`${this.BASE_URL}/residencia`, house);
  }
}
