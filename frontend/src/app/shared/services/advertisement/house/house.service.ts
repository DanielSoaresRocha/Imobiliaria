import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { House } from '../../../models/house.model'
import { HouseFilter } from '../../../models/house-filter.model'
import { environment as env} from '../../../../../environments/environment'

@Injectable({
  providedIn: 'root',
})
export class HouseService {
  
  private readonly BASE_URL = env.baseUrl +'produtos';

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
    let headers = new HttpHeaders()
      .append('Authorization', localStorage.getItem('token'))

    return this.httpClient.post(`${this.BASE_URL}/residencia`, house, {
      headers: headers
    });
  }

  findById(id: string){
    return this.httpClient.get<House>(`${this.BASE_URL}/${id}`);
  }

  listByAdvertiser(id: string){
    let headers = new HttpHeaders()
      .append('Authorization', localStorage.getItem('token'))

    return this.httpClient.get<House[]>(`${this.BASE_URL}/anunciante/${id}`,{
      headers: headers
    });
  }

  delete(id: string){
    let headers = new HttpHeaders()
      .append('Authorization', localStorage.getItem('token'))

    return this.httpClient.delete(`${this.BASE_URL}/${id}`, {
      headers: headers
    })
  }

  update(house: House):Observable<any>{
    let headers = new HttpHeaders()
      .append('Authorization', localStorage.getItem('token'))

    delete house.anunciante;

    return this.httpClient.put(`${this.BASE_URL}/${house.id}`, house, {
      headers: headers
    })
  }
}
