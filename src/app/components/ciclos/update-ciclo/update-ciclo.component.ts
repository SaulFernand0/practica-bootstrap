import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Ciclo } from 'src/app/models/ciclo';
import { CicloService } from 'src/app/services/ciclo.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-update-ciclo',
  templateUrl: './update-ciclo.component.html',
  styleUrls: ['./update-ciclo.component.css']
})

export class UpdateCicloComponent implements OnInit {
  ciclos: any;
  ciclo: Ciclo= new Ciclo();

  constructor(private cicloService:CicloService, private router: Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    console.log("log")
    this.cargarCiclo();
  }

  cargarCiclo():void{
    this.activatedRoute.params.subscribe(params=>{
      let id = params['id']
      if(id){
        this.cicloService.getCiclo(id).subscribe(
          (data)=>{
          this.ciclos=data['cursor_ciclos'] 
          this.ciclo.nombre=this.ciclos[0].NOMBRE;
          this.ciclo.id_ciclo=this.ciclos[0].ID_CICLO  
        })
      }
    })
  }

  modificarCiclo():void{
    this.cicloService.updateCiclo(this.ciclo).subscribe(
      response=>{
        console.log(this.ciclo)
        Swal.fire({
          title: 'Estas seguro?',
          text: "No podras deshacer esto",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si, actualizar'
        }).then((result) => {
          if (result.isConfirmed) {
            this.router.navigate(['/listar'])
            Swal.fire(
              'Actualizado',
              'El registro ha sido actualizado',
              'success'
            )
          }
        })    
    })
  }

}
