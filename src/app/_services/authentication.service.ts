import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Propiedades } from '../propiedades/propiedades';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient) { }

    login(username: string, password: string) {

        var data = new FormData();
        data.append('username', username);
        data.append('password', password);

        return this.http.post<any>(Propiedades.apiBaseUrl+Propiedades.pathLogin, data)
            .map(res => {
                // login successful si retorna error 0
                if (res.errno === 0 && res.usuario) {
                    // store user details in local storage to keep user logged in between page refreshes
                    localStorage.setItem('nomeUsuario', res.usuario);
                    localStorage.setItem('token', res.token);
                }
                return res;
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('nomeUsuario');
        localStorage.removeItem('token');
    }
}
