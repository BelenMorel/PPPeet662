import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodasNovService {

  constructor(private http: HttpClient) { }

  tNovedades!: Observable<any[]>;

  fechDatosTnov(){
    this.tNovedades  = this.http.get<any[]>('/assets/data/todasNovedades.json');
  }
}
