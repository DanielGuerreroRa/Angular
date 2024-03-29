import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../_servicio/empleado.service';
import { Empleado } from '../_modelo/empleado';
import { AltaEmpleadoComponent } from '../alta-empleado/alta-empleado.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-empleados',
  standalone: true,
  imports: [CommonModule,AltaEmpleadoComponent,],
  templateUrl: './lista-empleado.component.html',
  styleUrl: './lista-empleado.component.css'
})
export class ListaEmpleadosComponent implements OnInit{

  constructor(private servicio:EmpleadoService) { }
  ngOnInit(): void {
    this.servicio.listar().subscribe(datos => {this.empleados
      = datos;
  })
}
recibirAviso(listaActualizada:Observable<Empleado[]>){
  this.servicio.listar().subscribe(datos=>{
    this.empleados=datos;
    console.log("entra")
  })
}
  empleados:Empleado[]=[];

}