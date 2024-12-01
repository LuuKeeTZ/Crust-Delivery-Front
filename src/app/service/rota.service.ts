import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route } from '@angular/router';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/API_CONFIG';
import { Rotas } from '../model/rotas';

@Injectable({
  providedIn: 'root'
})
export class RotaService {

  constructor(private http: HttpClient) { }

  getAllRoutes(): Observable<Rotas[]> {
    return this.http.get<Rotas[]>(`${API_CONFIG.baseUrl}/routes`);
  }

  deleteRota(rota: Rotas): Observable<void>{
    return this.http.delete<void>(`${API_CONFIG.baseUrl}/routes/${rota.id}`)
  }
}
