import { Component } from '@angular/core';
import { HorariosService } from '../../servicios/horarios/horarios.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-horarios-tencnico',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './horarios-tencnico.component.html',
  styleUrl: './horarios-tencnico.component.css'
})
export class HorariosTencnicoComponent {

  constructor(private horariosService: HorariosService){}

  horariosTec: any;//guarda todos los datos del json
  imgAMostrar: any;//guarda los datos segun lo que se seleccione (imagenes del cada horario)
  descAMostrar: any;// guarda ls descripciones de cada img segun lo que se selecciono

  ngOnInit(): void {
  this.horariosService.fechInfoHorarios();
  this.horariosService.horarios.subscribe((data: any)=>{
  this.horariosTec=data;
  console.log(this.horariosTec)
  this.mostrarInfo('primeroB');//datos q se mostrarn cuando se inicializa 

  })};


//parámetro que recibe el valor de la opción seleccionada
  seleccionarCurso(curso: string) {
    this.mostrarInfo(curso);
  }

  mostrarInfo(curso: string) {
    switch (curso) {
      case 'primeroB':
        this.imgAMostrar = this.horariosTec.cursostecnico.primeroB;
        this.descAMostrar= this.horariosTec.cursostecnico.descripcionimgPB;
        break;
      case 'primeroC':
        this.imgAMostrar = this.horariosTec.cursostecnico.primeroC;
        this.descAMostrar= this.horariosTec.cursostecnico.descripcionimgPC;
        break;
      case 'primeroE':
        this.imgAMostrar = this.horariosTec.cursostecnico.primeroE;
        this.descAMostrar= this.horariosTec.cursostecnico.descripcionimgPE;
        break;
      case 'segundoA':
        this.imgAMostrar = this.horariosTec.cursostecnico.segundoA;
        this.descAMostrar= this.horariosTec.cursostecnico.descripcionimgSA;
        break;
      case 'segundoC':
        this.imgAMostrar = this.horariosTec.cursostecnico.segundoC;
        this.descAMostrar= this.horariosTec.cursostecnico.descripcionimgSC;
        break;
      case 'terceroC':
        this.imgAMostrar = this.horariosTec.cursostecnico.terceroC;
        this.descAMostrar= this.horariosTec.cursostecnico.descripcionimgTC;
        break;
      case 'terceroD':
        this.imgAMostrar = this.horariosTec.cursostecnico.terceroD;
        this.descAMostrar= this.horariosTec.cursostecnico.descripcionimgTD;
        break;
      case 'cuartoC':
        this.imgAMostrar = this.horariosTec.cursostecnico.cuartoC;
        this.descAMostrar= this.horariosTec.cursostecnico.descripcionimgCC;
        break;
      case 'cuartoD':
        this.imgAMostrar = this.horariosTec.cursostecnico.cuartoD;
        this.descAMostrar= this.horariosTec.cursostecnico.descripcionimgCD;
        break;
      case 'quintoU':
        this.imgAMostrar = this.horariosTec.cursostecnico.quintoU;
        this.descAMostrar= this.horariosTec.cursostecnico.descripcionimgQU;
        break;
      case 'sextoU':
        this.imgAMostrar = this.horariosTec.cursostecnico.sextoU;
        this.descAMostrar= this.horariosTec.cursostecnico.descripcionimgSU;
        break;
      default:
        this.imgAMostrar = this.horariosTec.cursostecnico.primeroB;
        this.descAMostrar= this.horariosTec.cursostecnico.descripcionimgPB;
    
    }
  }

}
