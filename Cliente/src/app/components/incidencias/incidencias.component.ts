import { Component, OnInit } from '@angular/core';
import { AsesoresService } from 'src/app/services/asesores/asesores.service';
import { IncidenciasService } from 'src/app/services/incidencias/incidencias.service';
import { Validators, AbstractControl, FormBuilder, FormGroup } from "@angular/forms";
import { pipe } from 'rxjs';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-incidencias',
  templateUrl: './incidencias.component.html',
  styleUrls: ['./incidencias.component.css']
})
export class IncidenciasComponent implements OnInit {
  editIncidenciaData: any;
  editInd: FormGroup;
  newInd: FormGroup;
  asesores: any;
  rows: any;
  incidencias: any;
  dia = new Date().getDate();
  mes = new Date().getMonth();
  anio = new Date().getFullYear();
  horas = new Date().getHours();
  minutos = new Date().getMinutes();
  fecha = this.anio + "/" + this.mes + "/" + this.dia + ", " + this.horas + ":" + this.minutos;

  constructor(
    private IncidenciasService: IncidenciasService,
    private asesoresService: AsesoresService,
    private formBuilder: FormBuilder,
    private fb: FormBuilder
  ) {

    //*--- formGroup de editar----
    this.editInd = this.fb.group({
      id: ["", Validators.required],
      cedula: ["", Validators.required],
      descripcion: ["", Validators.required],
      asesor: ["", Validators.required],
      estado: ["", Validators.required]

    }),

      //*--- formGroup de Crear----

      this.newInd = this.fb.group({
        cedula: ["", Validators.required],
        descripcion: ["", Validators.required],
        asesor: ["", Validators.required],
        fecha: [this.fecha, Validators.required],

      })
  }



  ngOnInit(): void {
    this.getUsers();
    this.getIncidencias();
    pipe;


  }
  newIncidencia() {
    console.log(this.newInd.value);
    this.IncidenciasService.newIncidencia(this.newInd.value).subscribe((res: any) => {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Registro exitoso",
        showConfirmButton: false,
        timer: 1500,
      });
      this.getIncidencias();
      this.newInd.reset();
    })

  }
  estadoAsesorToEdit: any;


  //?---Declaro los valores del formulario de editar----
  declareEditData(row: any) {
    this.editIncidenciaData = row;
    // console.log(this.editIncidenciaData.id);
    
    this.editInd.controls["id"].setValue(row.id);
    this.editInd.controls["cedula"].setValue(row.cedula);
    this.editInd.controls["descripcion"].setValue(row.descripcion);
    this.editInd.controls["asesor"].setValue(row.asesor);
    this.editInd.controls["estado"].setValue(row.nestado)
  }

  //?--Funcion de Editar--------
  editIncidencia() {
    let edit={
      cedula:this.editInd.value.cedula,
      descripcion:this.editInd.value.descripcion,
      asesor:this.editInd.value.asesor,
      estado:this.editInd.value.estado,

    }

    this.IncidenciasService.editProfile(this.editIncidenciaData.id,edit).subscribe((res: any) => {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Edicion Exitosa",
        showConfirmButton: false,
        timer: 1500,
      });
      this.getIncidencias();
    })
  }

  //?------- traigo todos los asesores de la bd--------
  getUsers() {
    this.asesoresService.getAsesor().subscribe((res: any) => {
      this.asesores = res

    })
  }
  //?--------traigo todas la lista de incidencias de la db-------
  getIncidencias() {
    this.IncidenciasService.getIncidencias().subscribe((res: any) => {
      console.log(res);
      this.incidencias = res;

    })
  }



}