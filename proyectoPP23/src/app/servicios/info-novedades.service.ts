import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoNovedadesService {
  constructor(private http: HttpClient){}

  ultNovedades!: Observable<any[]>;
  
  getdataultNov() {
    this.ultNovedades = this.http.get<any[]>('assets/data/ultimasNov.json'); // Asigna la solicitud HTTP al Observable
  }
  
  
 
}
