import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NovedadesService } from '../../servicios/novedades/novedades.service';
import { OnInit } from '@angular/core';
import { Novedades } from '../../modelos/Novedades/Novedades';
@Component({
  selector: 'app-todas-novedades',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todas-novedades.component.html',
  styleUrl: './todas-novedades.component.css'
})
export class TodasNovedadesComponent {

  constructor(private novedadesService: NovedadesService){}

  todasnovedades!: Novedades;

  ngOnInit(): void{
    this.novedadesService.obtenerInfoNovedades().subscribe((data: Novedades)=>{
      this.todasnovedades=data;
      console.log(this.todasnovedades)
    })
  }


  
}
