import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Materiales } from '../../modelos/MaterialEstudio/Materiales';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class MaterialEstudioService {

  constructor(private http: HttpClient) { }

  public obtenerInfoMaterias(): Observable<Materiales>{
    return this.http.get<Materiales>('/assets/data/materialEstudio.json')
  }
}
