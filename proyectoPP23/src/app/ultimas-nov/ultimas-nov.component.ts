import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoNovedadesService } from '../servicios/info-novedades.service';

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

constructor(private infoNovedadesService: InfoNovedadesService){
  console.log(this.ultimasnovedades)
}

ultimasnovedades: any []=[];

addultimasNov(){
  this.infoNovedadesService.getdataultNov();
  this.infoNovedadesService.ultNovedades.subscribe((data: any[]) => {
    this.ultimasnovedades = data;
})}

}
