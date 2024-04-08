import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { BarranavComponent } from './componentes/barranav/barranav.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { PiePaginaComponent } from './componentes/pie-pagina/pie-pagina.component';
import { UltimasNovComponent } from './componentes/ultimas-nov/ultimas-nov.component';
import { TodasNovedadesComponent } from './componentes/todas-novedades/todas-novedades.component';
import { HorariosTencnicoComponent } from './componentes/horarios-tencnico/horarios-tencnico.component';
import { HorariosBachillerComponent } from './componentes/horarios-bachiller/horarios-bachiller.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
       CommonModule,
    HttpClientModule,
    BarranavComponent,
    UltimasNovComponent,
    InicioComponent,
    PiePaginaComponent,
    TodasNovedadesComponent,
    HorariosTencnicoComponent,
    HorariosBachillerComponent,
    AcercaDeComponent,
    
    
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyectoPP23';
}
