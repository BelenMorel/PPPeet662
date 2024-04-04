import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

import { BarranavComponent } from './barranav/barranav.component';
import { InicioComponent } from './inicio/inicio.component';
import { PiePaginaComponent } from './pie-pagina/pie-pagina.component';
import { UltimasNovComponent } from './ultimas-nov/ultimas-nov.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    InicioComponent,
    BarranavComponent,
    PiePaginaComponent,
    UltimasNovComponent,
    CommonModule,
    HttpClientModule,
    
    
    
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyectoPP23';
}
