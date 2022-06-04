import { Component } from '@angular/core';
import { Socio } from './socio';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mi-app';
  socio: Socio = this.newSocio()
  socios: Socio[] = []
  opcionSeleccionada: string = " ";

  getSocio(){
    return JSON.stringify(this.socio);
  }

  addSocio(){
    console.log("add a person");
    this.socios.push({...this.socio})
    this.socio = this.newSocio()
  }
  
  onSubmit(){
    console.log(this.socio)
  }
private newSocio(): Socio {
  return {
    nombre: '',
    apellidos: '',
    socioID: 0,
    dni: "",
    telefono: 0,
    sexo: '',
  }
}

seleccion(){
  this.socio.sexo= this.opcionSeleccionada;
}

editSocio(){
this.socio.nombre = String (this.getSocio());
}

deleteSocio(dni: string){
  this.socios = this.socios.filter(socio => socio.dni !== dni);
}

}

