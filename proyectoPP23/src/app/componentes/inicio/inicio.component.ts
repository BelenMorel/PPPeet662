import { Component } from '@angular/core';
import { UltimasNovComponent } from '../ultimas-nov/ultimas-nov.component';
import { CommonModule } from '@angular/common';
import { SeccBienvenidaService } from '../../servicios/seccBienvenida/secc-bienvenida.service';
import { seccionBienv } from '../../modelos/seccionBienv/seccionBienv';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [ UltimasNovComponent, CommonModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  constructor(private seccBienvenidaService:SeccBienvenidaService){}

  infoBienvenida!: seccionBienv;

  ngOnInit(): void{
    this.seccBienvenidaService.fechInfoBienv();
    this.seccBienvenidaService.infoBIenv.subscribe((data: seccionBienv)=>{
    this.infoBienvenida=data;
    })
  }

}
