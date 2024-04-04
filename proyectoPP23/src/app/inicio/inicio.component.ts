import { Component } from '@angular/core';
import { UltimasNovComponent } from '../ultimas-nov/ultimas-nov.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [UltimasNovComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
