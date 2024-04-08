import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Novedades } from '../../modelos/Novedades/Novedades';
import { NovedadesService } from '../../servicios/novedades/novedades.service';

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
  
  constructor(private novedadesService: NovedadesService){}

  ultimasnovedades!: Novedades;

  ngOnInit(): void{
    this.novedadesService.obtenerInfoNovedades().subscribe((data: Novedades)=>{
      this.ultimasnovedades=data;
      console.log(this.ultimasnovedades)
    })
  }


}
