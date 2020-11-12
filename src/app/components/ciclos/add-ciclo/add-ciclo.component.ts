import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Ciclo } from 'src/app/models/ciclo';
import { CicloService } from 'src/app/services/ciclo.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-add-ciclo',
  templateUrl: './add-ciclo.component.html',
  styleUrls: ['./add-ciclo.component.css']
})

export class AddCicloComponent implements OnInit {
  cicloModel:Ciclo = new Ciclo();

  constructor(private cicloService:CicloService, private router: Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {}
    public create():void{
      this.cicloService.addCiclo(this.cicloModel).subscribe(
        response=>{
          this.router.navigate(['/listar'])
        swal.fire('Nuevo Ciclo', `Ciclo ${this.cicloModel.nombre} creado con exito`,"success")}
      )
  }

}
