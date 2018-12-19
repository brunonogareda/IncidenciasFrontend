import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { User } from '../_models/index';
// import { UserService } from '../_services/index';


@Component({
    moduleId: module.id.toString(),
    selector: 'navbar',
    templateUrl: 'navbar.component.html',
    styleUrls: ['./navbar.component.css'],
    providers: [Title]
    })


export class NavbarComponent implements OnInit {


  titulo_seccion: string;

  constructor(private title: Title)
   {
     this.titulo_seccion = this.title.getTitle();
   }

  ngOnInit() {
  }

}
