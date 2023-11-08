import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from '../persona';
import { PersonaService } from '../persona.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss']
})
export class PersonaComponent implements OnInit {

  personas!: Persona[];

  mostrarFormulario = false;

  constructor(public personaService: PersonaService, private router: Router, private route: ActivatedRoute){
    this.personas = personaService.obtenerPersonas();
  }

  ngOnInit(): void {
  }

  actualizarTabla(persona: Persona) {
    this.personas.push(persona);
  }

  toggleFormulario() {
    this.mostrarFormulario = !this.mostrarFormulario;
  }

}
