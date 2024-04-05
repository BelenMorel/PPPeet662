import { Component } from '@angular/core';
import { InfoPiepagService } from '../../servicios/infoPiePagina/info-piepag.service';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pie-pagina',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pie-pagina.component.html',
  styleUrl: './pie-pagina.component.css'
})
export class PiePaginaComponent {
  constructor(private infoPiepagService: InfoPiepagService ){
    console.log(this.infoPiePagina)
  }

  infoPiePagina: any;



ngOnInit(){
  this.infoPiepagService.fechinfoPP();
  this.infoPiepagService.infoPP.subscribe((data: any)=>{
  this.infoPiePagina= data;
  })};

}
