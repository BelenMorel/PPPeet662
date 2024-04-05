import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TodasNovService } from '../../servicios/todNovedades/todas-nov.service';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-todas-novedades',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todas-novedades.component.html',
  styleUrl: './todas-novedades.component.css'
})
export class TodasNovedadesComponent {
  constructor(private todasNovService: TodasNovService){
  }

  todasNovedades: any[]=[];

  ngOnInit(): void{
    this.todasNovService.fechDatosTnov();
    this.todasNovService.tNovedades.subscribe((data: any[]) =>{
    this.todasNovedades=data;    
    console.log(this.todasNovedades);

    })};

}
