import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
    return this.httpClient
      .get(`${this.BASE_URL}/residencia?minValor=${filter.minValue != null ? filter.minValue :0}`+
        `${filter.maxValue != null ? '&maxValor='+filter.maxValue :''}`+
        `${filter.minMeters != null ? '&minMetrosQuadrados='+filter.minMeters :''}`+
        `${filter.maxMeters != null ? '&maxMetrosQuadrados='+filter.maxMeters :''}`+
        `${filter.qtdBathrooms != null ? '&qtdBanheiros='+filter.qtdBathrooms :''}`+
        `${filter.qtdBedrooms != null ? '&qtd_quartos='+filter.qtdBedrooms :''}`+
        `${filter.qtdGarage != null ? '&qtdVagasNaGaragem='+filter.qtdGarage :''}`);
  }

  create(house : House):Observable<any>{
    return this.httpClient.post(`${this.BASE_URL}/residencia`, house);
  }

  findById(id: string){
    return this.httpClient.get<House>(`${this.BASE_URL}/${id}`);
  }
}
