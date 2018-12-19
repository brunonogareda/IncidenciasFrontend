import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Propiedades } from '../propiedades/propiedades';

import 'rxjs/add/operator/map'

// const headerDict = {
//   'Authorization': 'Bearer '+localStorage.getItem('token'),
//   'Accept': 'application/json',
//   'Access-Control-Allow-Headers': 'Content-Type',
// }
const httpOptions = {
     headers: new HttpHeaders({
     'Content-Type':  'application/json',
     'Authorization': 'Bearer '+localStorage.getItem('token')
    })
};

@Injectable()
export class IncidenciasService {

    constructor(private http: HttpClient) { }


    obterIncidencias() {
      var url = Propiedades.apiBaseUrl+Propiedades.pathIncidenciaBuscar;
      return this.http.get<any>(url, httpOptions);
    }

  }
