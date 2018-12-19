import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
// import { User } from '../_models/index';
// import { UserService } from '../_services/index';
// import { NavbarComponent } from '../navbar/navbar.component';

@Component({
    moduleId: module.id.toString(),
    selector: 'perfil',
    templateUrl: 'perfil.component.html',
    providers: [Title]
  })

export class PerfilComponent implements OnInit {
  model: any = {};

  titulo_seccion: string = "Perfil";

  constructor(private title: Title)
     {
       this.title.setTitle(this.titulo_seccion);
     }

  ngOnInit() {
  }

}
