import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uno',
  templateUrl: './uno.component.html',
  styleUrls: ['./uno.component.css']
})
export class UnoComponent {

  cat: string = 'Sr';
  nombre: string = 'Alejandro Señor Sanz';
  ruta: string = "assets/images/angular_img.png"
  pulsaciones: number = 0;
  operacion: number = 0;
  tipoOperacion: string = "";


  cambiarDatos(){
    this.nombre = "Nombre cambiado"
  }

  sumar(){
    this.pulsaciones++;
  }

  restar(){

    if (this.pulsaciones == 0) {
      alert("No se puede decrementar");
    } else {
      this.pulsaciones--;
    }

  }

  reset(){
    this.pulsaciones = 0;
  }

  cambiarNombre(cat: string, nombre: string){
    //console.log("Elemento pulsado");
    //let valor = document.querySelector('#inputNombre')?.nodeValue;
    if (nombre.length > 0) {
      this.cat = cat;
      this.nombre = nombre;
    } else {
      alert("Rellena todos los campos")
    }
    
    
  }

  tratamientoCambiado(){
    
    
  }

  calcularOperacion(opUno: string, opDos: string, operacion: string){

    this.tipoOperacion = operacion;

      if (opUno && opDos) {
        switch (operacion.toLowerCase()) {
          case "suma":
            this.operacion = Number(opUno) + Number(opDos)
            break;
          case "resta":
            this.operacion = Number(opUno) - Number(opDos)
            break;
          case "multiplicacion":
            this.operacion = Number(opUno) * Number(opDos)
            break;
          case "division":
            this.operacion = Number(opUno) / Number(opDos)
            break;
        }
      }
  }

}
