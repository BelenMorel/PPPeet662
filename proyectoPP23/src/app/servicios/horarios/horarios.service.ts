import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HorariosService {

  constructor(private http: HttpClient) { }

horarios: any;

fechInfoHorarios(){
  this.horarios= this.http.get('/assets/data/horarios.json');
}

}
