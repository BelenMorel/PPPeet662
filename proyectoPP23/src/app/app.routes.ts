import { Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { UltimasNovComponent } from './componentes/ultimas-nov/ultimas-nov.component';
import { TodasNovedadesComponent } from './componentes/todas-novedades/todas-novedades.component';



export const routes: Routes = [
    {path: 'inicio', component: InicioComponent},
    {path: 'ultimasNov', component: UltimasNovComponent}, 
    {path: 'todasNovedades', component: TodasNovedadesComponent},
    {path:'**', pathMatch:'full', redirectTo: 'inicio'}
 
];
