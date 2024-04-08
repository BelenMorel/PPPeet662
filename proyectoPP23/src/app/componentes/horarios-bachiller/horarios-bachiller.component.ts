import { Component } from '@angular/core';
import { HorariosService } from '../../servicios/horarios/horarios.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-horarios-bachiller',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './horarios-bachiller.component.html',
  styleUrl: './horarios-bachiller.component.css'
})
export class HorariosBachillerComponent {

  constructor(private horariosService: HorariosService){}

  horariosBach: any;//guarda todos los datos del json
  imgAMostrar: any;//guarda los datos segun lo que se seleccione (imagenes del cada horario)
  descAMostrar: any;// guarda ls descripciones de cada img segun lo que se selecciono

  ngOnInit(): void {
  this.horariosService.obtenerInfoHorarios();
  this.horariosService.horarios.subscribe((data: any)=>{
  this.horariosBach=data;
  console.log(this.horariosBach)
  this.mostrarInfo('primeroA');//datos q se mostrarn cuando se inicializa 

  })};


//parámetro que recibe el valor de la opción seleccionada
  seleccionarCurso(curso: string) {
    this.mostrarInfo(curso);
  }

  mostrarInfo(curso: string) {
    switch (curso) {
      case 'primeroA':
        this.imgAMostrar = this.horariosBach.cursosbachiller.primeroA;
        this.descAMostrar= this.horariosBach.cursosbachiller.descripcionimgPA;
        break;
      case 'primeroD':
        this.imgAMostrar = this.horariosBach.cursosbachiller.primeroD;
        this.descAMostrar= this.horariosBach.cursosbachiller.descripcionimPDg;
        break;
      case 'segundoB':
        this.imgAMostrar = this.horariosBach.cursosbachiller.segundoB;
        this.descAMostrar= this.horariosBach.cursosbachiller.descripcionimgSB;
        break;
      case 'segundoD':
        this.imgAMostrar = this.horariosBach.cursosbachiller.segundoD;
        this.descAMostrar= this.horariosBach.cursosbachiller.descripcionimgSD;
        break;
      case 'terceroA':
        this.imgAMostrar = this.horariosBach.cursosbachiller.terceroA;
        this.descAMostrar= this.horariosBach.cursosbachiller.descripcionimgTA;
        break;
      case 'terceroB':
        this.imgAMostrar = this.horariosBach.cursosbachiller.terceroB;
        this.descAMostrar= this.horariosBach.cursosbachiller.descripcionimgTB;
        break;
      case 'cuartoA':
        this.imgAMostrar = this.horariosBach.cursosbachiller.cuartoA;
        this.descAMostrar= this.horariosBach.cursosbachiller.descripcionimgCA;
        break;
      case 'cuartoB':
        this.imgAMostrar = this.horariosBach.cursosbachiller.cuartoB;
        this.descAMostrar= this.horariosBach.cursosbachiller.descripcionimgCD;
        break;
      case 'quintoU':
        this.imgAMostrar = this.horariosBach.cursosbachiller.quintoU;
        this.descAMostrar= this.horariosBach.cursosbachiller.descripcionimgQU;
        break;
     
    }
  }


}
