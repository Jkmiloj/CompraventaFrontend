import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Persona } from '../persona';
import { PersonaService } from '../persona.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit{

  @Output() agregarPersona: EventEmitter<Persona> = new EventEmitter<Persona>(); 
  @Output() cancel = new EventEmitter<void>();

  openAlert: boolean = false;
  ocultarFormulario: boolean = true;
  formUser: FormGroup;

  constructor(private fb: FormBuilder, private personaService: PersonaService){ }

  ngOnInit(): void {
    this.formUser = this.fb.group({
      'cc' : [null, [Validators.required, Validators.pattern(/^\d+$/)]],
      'name' : [null, Validators.required],
      'apellido1' : [null, Validators.required],
      'apellido2' : [null, Validators.required],
      'edad' : [null, [Validators.required, Validators.pattern(/^\d+$/)]],
      'genero' : [null, Validators.required]
    }); 
  }

  
  
  /*procesar(){
    console.log(this.formUser.value);
    this.openAlert=true;
  }*/

  guardar(){
    // Crea un objeto Persona a partir de los datos del formulario
    if (this.formUser.valid) {
      const personaGuardar = this.personaService.construirPersona(this.formUser.value);
      this.personaService.guardarPersona(personaGuardar);

      this.formUser.reset();
      this.openAlert=true;
    }
  }

  cancelar(){
    this.openAlert=false;
    this.ocultarFormulario = false;
  }
}
