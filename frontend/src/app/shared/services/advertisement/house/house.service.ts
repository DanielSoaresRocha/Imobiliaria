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

    let params = new HttpParams()
      .set('minValor', filter.minValue == null ? null : filter.minValue.toString())
      .set('maxValor', filter.maxValue == null ? null : filter.maxValue.toString())
      .set('minMetrosQuadrados', filter.minMeters == null ? null : filter.minMeters.toString())
      .set('maxMetrosQuadrados', filter.maxMeters == null ? null : filter.maxMeters.toString())
      .set('qtdBanheiros', filter.qtdBathrooms == null ? null : filter.qtdBathrooms.toString())
      .set('qtdQuartos', filter.qtdBedrooms == null ? null : filter.qtdBedrooms.toString())
      .set('qtdVagasNaGaragem', filter.qtdGarage == null ? null : filter.qtdGarage.toString());

    console.log(params.toString());
    
    return this.httpClient.get(`${this.BASE_URL}/residencia`, {params})
  }

  create(house : House):Observable<any>{
    return this.httpClient.post(`${this.BASE_URL}/residencia`, house);
  }

  findById(id: string){
    return this.httpClient.get<House>(`${this.BASE_URL}/${id}`);
  }
}
