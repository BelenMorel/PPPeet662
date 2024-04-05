import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SeccBienvenidaService {

  constructor(private http: HttpClient) { }

  infoBIenv: any;

  fechInfoBienv(){
    this.infoBIenv = this.http.get('/assets/data/seccionBienvenida.json');
  }

}
