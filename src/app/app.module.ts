import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService } from './_services/index';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { NavbarComponent } from './navbar/navbar.component';
import { ListaIncidenciasComponent } from './listaIncidencias/listaIncidencias.component';
import { PerfilComponent } from './user/perfil.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { Propiedades } from './propiedades/propiedades';
import * as $ from 'jquery/dist/jquery.min.js';



@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    ListaIncidenciasComponent,
    PerfilComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [
      AuthGuard,
      AlertService,
      AuthenticationService,
      UserService
    ],
  bootstrap: [AppComponent]
})

export class AppModule { }
