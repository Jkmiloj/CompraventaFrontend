import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from './persona'; // Importa la interfaz Persona

@Injectable({
    providedIn: 'root',
})
export class PersonaService {

    private personas: Persona[] = [];

    urlPersonas = 'http://localhost:8080/traer-todo';

    constructor(private http: HttpClient){ }

    getPersonas(){
        let header = new HttpHeaders()
            .set('Type-content', 'aplication/json')
        
        return this.http.get(this.urlPersonas, {
            headers: header
        });
    }

    /*public getPersonas(): Observable<any>{
        return this.http.get<any>('http://localhost:8080/traer-todo');
    }*/

    guardarPersona(persona: Persona) {
        // Agrega la nueva persona a la lista
        this.personas.push(persona);
    }

    construirPersona(formularioPersona: any): Persona {
        const nuevaPersona: Persona = {
            ...formularioPersona //con los puntos coje todos los atributos
        };
        return nuevaPersona;
    }
    
    obtenerPersonas(): Persona[] {
        // Devuelve la lista de personas
        return this.personas;
    }

}
