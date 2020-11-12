import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Ciclo } from 'src/app/models/ciclo';
import { CicloService } from 'src/app/services/ciclo.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-listar-ciclo',
  templateUrl: './listar-ciclo.component.html',
  styleUrls: ['./listar-ciclo.component.css']
})
export class ListarCicloComponent implements OnInit {
  ciclos: any;

  constructor(private cicloService:CicloService, private router: Router) { }

  ngOnInit(): void {
    this.listar();
  }

  delCiclo(num:number):void{
    Swal.fire({
      title: 'Estas seguro?',
      text: "No podras deshacer esto",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.cicloService.deleteCiclo(num).subscribe(
          response=>{
        this.listar()
        Swal.fire(
          'Eliminado',
          'El registro ha sido eliminado',
          'success'
        )})
      }
      }
    )   
}

listar():void{
  console.log("listar")
  this.cicloService.getCiclos().subscribe(
    (data)=>{
      this.ciclos = data['cursor_ciclos'];
    }
  ) 
}

}
