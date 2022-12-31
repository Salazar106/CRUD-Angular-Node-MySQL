import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IncidenciasService {
  API_URL = environment.API_URL;
  constructor(private http: HttpClient) { }

  getIncidencias(){
    return this.http.get(`${this.API_URL}/incidencias`);
  }

  newIncidencia(body:any){
    return this.http.post(`${this.API_URL}/newIncidencia`,body);
  }


  editProfile(id: number, data: any) {
    return this.http.put(`${this.API_URL}/editIncidencia/${id}`, data)
  }

  getEstadoAsesor(id:number){
    return this.http.get(`${this.API_URL}/estadoAsesor/${id}`);
  }
}
