import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoNovedadesService } from '../../servicios/info-novedades.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-ultimas-nov',
  standalone: true,
  imports: [
    CommonModule,
      ],
  templateUrl: './ultimas-nov.component.html',
  styleUrl: './ultimas-nov.component.css'
})
export class UltimasNovComponent {

constructor(private infoNovedadesService: InfoNovedadesService){}

 ultimasnovedades: any []=[];//datos del json ultimmasnov
 
 mostrarinfo(){
  console.log(this.ultimasnovedades)
 }

 
 ngOnInit(): void {   
  this.infoNovedadesService.getdataultNov();
  this.infoNovedadesService.ultNovedades.subscribe((data: any[]) => {
  this.ultimasnovedades = data; })};

}
