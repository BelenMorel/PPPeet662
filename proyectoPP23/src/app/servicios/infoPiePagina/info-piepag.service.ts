import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { piePag } from '../../modelos/piePagina/piePag';

@Injectable({
  providedIn: 'root'
})
export class InfoPiepagService {

  constructor(private http: HttpClient) { }


   public obtenerinfoPP(): Observable<piePag>{
     return this.http.get<piePag>('/assets/data/piePagina.json');
  }
}
