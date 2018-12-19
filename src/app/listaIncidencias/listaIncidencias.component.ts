import { Component, OnInit } from '@angular/core';

import { User, Incidencia } from '../_models/index';
import { AlertService, IncidenciasService } from '../_services/index';


@Component({
    moduleId: module.id.toString(),
    selector: 'listaIncidencias',
    templateUrl: 'listaIncidencias.component.html',
    styleUrls: ['./listaIncidencias.component.css'],
    providers: [
            IncidenciasService
    ]
})

export class ListaIncidenciasComponent implements OnInit {
  model: any = {};
  public incidencias: Incidencia[];

  constructor(
    private incidenciasService: IncidenciasService,
    private alertService: AlertService) { }

  ngOnInit() {
    this.obterIncidencias();
  }

  obterIncidencias() {
    this.incidenciasService.obterIncidencias()
      .subscribe(
        data => {
          if(data.errno === 0){
            this.incidencias = data.incidencias;
          }
          else {
            this.alertService.error(data.message);
          }
        },
        error => {
            this.alertService.error(error);
        });
  }

}
