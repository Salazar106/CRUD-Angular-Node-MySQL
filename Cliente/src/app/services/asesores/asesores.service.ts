import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AsesoresService {
  API_URL = environment.API_URL;
  constructor(private http: HttpClient) { }

  getAsesor(){
    return this.http.get(`${this.API_URL}/usuarios`);
  }

  
}
