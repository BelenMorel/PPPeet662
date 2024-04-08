import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InicioComponent } from '../inicio/inicio.component';
import { UltimasNovComponent } from '../ultimas-nov/ultimas-nov.component';

@Component({
  selector: 'app-barranav',
  standalone: true,
  imports: [
    RouterModule,
    InicioComponent,
    UltimasNovComponent

  ],
  templateUrl: './barranav.component.html',
  styleUrl: './barranav.component.css'
})
export class BarranavComponent {
  btnInicio: boolean= false;

  
   
}
