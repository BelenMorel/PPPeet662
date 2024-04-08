import { Component } from '@angular/core';
import { InfoPiepagService } from '../../servicios/infoPiePagina/info-piepag.service';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { piePag } from '../../modelos/piePagina/piePag';

@Component({
  selector: 'app-pie-pagina',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pie-pagina.component.html',
  styleUrl: './pie-pagina.component.css'
})
export class PiePaginaComponent {
  
  constructor(private infoPiepagService: InfoPiepagService ){
  }

  infoPiePagina!: piePag;


ngOnInit(){
  this.infoPiepagService.obtenerinfoPP().subscribe((data: piePag)=>{
  this.infoPiePagina= data;
  })};

}
