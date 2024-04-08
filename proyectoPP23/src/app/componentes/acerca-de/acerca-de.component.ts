import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AcercaDeService } from '../../servicios/acercaDe/acerca-de.service';
import { slide } from '../../modelos/acercaD/slide';
import { carousel } from '../../modelos/acercaD/carousel';


@Component({
  selector: 'app-acerca-de',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './acerca-de.component.html',
  styleUrl: './acerca-de.component.css'
})
export class AcercaDeComponent {

  constructor(private acercaDeService: AcercaDeService){}

  slides!: carousel;

  ngOnInit(): void{
    this.acercaDeService.obtenerinfoCar().subscribe((data: carousel)=>{
      this.slides=data;
      
    })
  }
  
}
