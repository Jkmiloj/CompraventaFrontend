import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonaComponent } from './persona/persona.component';
import { FormularioComponent } from './formulario/formulario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonaService } from './persona.service';
import { CrearComponent } from './compraventa/components/crear/crear.component';
import { LeerComponent } from './compraventa/components/leer/leer.component';
import { ActualizarComponent } from './compraventa/components/actualizar/actualizar.component';
import { EliminarComponent } from './compraventa/components/eliminar/eliminar.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NuevaPersonaComponent } from './compraventa/components/nueva-persona/nueva-persona.component';
import { FormularioPersonaComponent } from './compraventa/components/formulario-persona/formulario-persona.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    FormularioComponent,
    /*CrearComponent,
    LeerComponent,
    ActualizarComponent,
    EliminarComponent,
    NuevaPersonaComponent,
    FormularioPersonaComponent*/
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],

  providers: [PersonaService],
  bootstrap: [AppComponent]

})
export class AppModule { }
