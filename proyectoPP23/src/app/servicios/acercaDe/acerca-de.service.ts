import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { slide } from '../../modelos/acercaD/slide';
import { carousel } from '../../modelos/acercaD/carousel';



@Injectable({
  providedIn: 'root'
})
export class AcercaDeService {

  constructor(private http: HttpClient){}

public obtenerinfoCar(): Observable<carousel>{
  return this.http.get<carousel>('/assets/data/acercaDe.json');
}
 
}
