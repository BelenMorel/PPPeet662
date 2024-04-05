import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class InfoPiepagService {

  constructor(private http: HttpClient) { }

  infoPP!: Observable<any>;

  fechinfoPP(){
   this.infoPP=this.http.get<any>('/assets/data/piePagina.json');
  }
}
