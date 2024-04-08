import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Novedades } from '../../modelos/Novedades/Novedades';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NovedadesService {

  constructor(private http: HttpClient) { }


  public fechInfoNovedades(): Observable<Novedades> {
    return this.http.get<Novedades>('/assets/data/todasNovedades.json');
  }


}
