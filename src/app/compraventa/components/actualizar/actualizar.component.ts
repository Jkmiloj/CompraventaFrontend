import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PersonaService } from 'src/app/persona.service';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.scss']
})
export class ActualizarComponent {

  data: any [] = [];

  constructor(private personaservice: PersonaService, private http: HttpClient){

  }

  ngOnInit(): void{
    this.verdata();
  }

  verdata(){
    this.personaservice.getData().subscribe(data =>{
      this.data = data;
      console.log(this.data)
    })
  }
  
}
