import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonaComponent } from './persona/persona.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ActualizarComponent } from './compraventa/components/actualizar/actualizar.component';
import { CrearComponent } from './compraventa/components/crear/crear.component';
import { LeerComponent } from './compraventa/components/leer/leer.component';
import { EliminarComponent } from './compraventa/components/eliminar/eliminar.component';
import { HomeComponent } from './compraventa/components/home/home.component';
import { PageNotFoundComponent } from './compraventa/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  /*{path: '', redirectTo: '/persona', pathMatch: 'full'},*/
  {path: 'persona',component: PersonaComponent},
  {path: 'formulario',component: FormularioComponent},
  {path: 'actualizar', component: ActualizarComponent},
  {path: 'crear', component: CrearComponent},
  {path: 'eliminar', component: EliminarComponent},
  {path: 'leer', component: LeerComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//crear toodos los metodos aca
//cada componete del CRUD crear las rutas