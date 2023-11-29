import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PersonaService } from 'src/app/persona.service';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.scss'],
  providers: [PersonaService],
})
export class ActualizarComponent implements OnInit {

  public personas: Array<any> = [];

  constructor(private personaservice: PersonaService, private http: HttpClient){

  }

  /*ngOnInit(): void{
    this.verdata();
  }*/

  ngOnInit() {
    this.personaservice.getPersonas().subscribe( (resp: any) => {
      console.log(resp)
      this.personas = resp
    })
  }

  /*verdata(){
    this.personaservice.getData().subscribe(data =>{
      this.data = data;
      console.log(this.data)
    })
  }*/
  
}
