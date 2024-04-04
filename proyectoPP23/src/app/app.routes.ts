import { Routes } from '@angular/router';
import { BarranavComponent } from './barranav/barranav.component';
import { InicioComponent } from './inicio/inicio.component';
import { UltimasNovComponent } from './ultimas-nov/ultimas-nov.component';


export const routes: Routes = [
    {path: 'inicio', component: InicioComponent},
    {path: 'ultimasNov', component: UltimasNovComponent},   
    {path:'**', pathMatch:'full', redirectTo: 'inicio'}
 
];
