import { Component } from '@angular/core';
import { MaterialEstudioService } from '../../servicios/MaterialEstudio/material-estudio.service';
import { Materiales } from '../../modelos/MaterialEstudio/Materiales';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mat-est-bachiller',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mat-est-bachiller.component.html',
  styleUrl: './mat-est-bachiller.component.css'
})
export class MatEstBachillerComponent {

  constructor(private materialEstudioService:MaterialEstudioService){}

  materialesBachiller!: Materiales;

ngOnInit(): void{
  this.materialEstudioService.obtenerInfoMaterias().subscribe((data: Materiales)=>{
    this.materialesBachiller=data;
    console.log(this.materialesBachiller);
  })
}

  opcion1?:{};
  opcion2?:{};
  opcion3?:{};
  opcion4?:{};
  opcion5?:{};
  opcion6?:{};
  opcion7?:{};
  opcion8?:{};
  opcion9?:{};


  mostrarMateriales: any;
  listaMaterias?: any;
  

  seleccionarCurso(curso: string) {
     this.mostrarMaterias(curso);
  }

   matSelcc(materia: string){
     this.mostrarMateriales(materia);
   }
  
   mostrarMaterias(curso: string) {
     switch (curso) {
       case 'primeroA':
       // this.opcion1=this.materialesBachiller['cursosbachiller'].primeroA.materias.Biología;
        // this.opcion2= this.materialesBachiller.cursosbachiller.primeroA.materias.
        // this.opcion3= this.materialesBachiller.cursosbachiller.primeroA.materias.
        // this.opcion4= this.materialesBachiller.cursosbachiller.primeroA.materias.
        // this.opcion5= this.materialesBachiller.cursosbachiller.primeroA.materias.
        // this.opcion6= this.materialesBachiller.cursosbachiller.primeroA.materias.
        // this.opcion7= this.materialesBachiller.cursosbachiller.primeroA.materias.
        // this.opcion8= this.materialesBachiller.cursosbachiller.primeroA.materias.
        // this.opcion9= this.materialesBachiller.cursosbachiller.primeroA.materias.
       
         break;

       case 'primeroD':
        this.listaMaterias =  ("");
         break;

       case 'segundoB':
          this.listaMaterias= ("");
       break;
   
    default:
      break;
  }
 } 

}
