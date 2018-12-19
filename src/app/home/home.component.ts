import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { User } from '../_models/index';
import { UserService } from '../_services/index';
import { NavbarComponent } from '../navbar/navbar.component';
import { ListaIncidenciasComponent } from '../listaIncidencias/listaIncidencias.component';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
    currentUser: User;
    users: User[] = [];
    titulo_seccion: string = "Home";

    constructor(private userService: UserService, private title: Title) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

        this.title.setTitle(this.titulo_seccion);
    }

    ngOnInit() {
        // this.loadAllUsers();
    }

    // deleteUser(id: number) {
    //     this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
    // }

    // private loadAllUsers() {
    //     this.userService.getAll().subscribe(users => { this.users = users; });
    // }
}
