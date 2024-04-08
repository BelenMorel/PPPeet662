import { Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { UltimasNovComponent } from './componentes/ultimas-nov/ultimas-nov.component';
import { TodasNovedadesComponent } from './componentes/todas-novedades/todas-novedades.component';
import { HorariosTencnicoComponent } from './componentes/horarios-tencnico/horarios-tencnico.component';
import { HorariosBachillerComponent } from './componentes/horarios-bachiller/horarios-bachiller.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';


export const routes: Routes = [
    {path: 'inicio', component: InicioComponent},
    {path: 'ultimasNov', component: UltimasNovComponent}, 
    {path: 'todasNovedades', component: TodasNovedadesComponent},
    {path: 'horariosTecnico', component: HorariosTencnicoComponent},
    {path: 'horariosBachiller', component: HorariosBachillerComponent},
    {path: 'acercaDe', component: AcercaDeComponent},
    {path:'**', pathMatch:'full', redirectTo: 'inicio'}
 
];
