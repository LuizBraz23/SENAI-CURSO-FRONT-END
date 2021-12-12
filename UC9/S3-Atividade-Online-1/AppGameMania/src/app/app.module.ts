import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContatoComponent } from './views/contato/contato.component';
import { CarrosselComponent } from './shared/carrossel/carrossel.component';
import { BannerComponent } from './shared/banner/banner.component';
import { DestaqueComponent } from './shared/destaque/destaque.component';
import { NovidadesComponent } from './shared/novidades/novidades.component';
import { GaleriaComponent } from './shared/galeria/galeria.component';
import { FormularioComponent } from './shared/formulario/formulario.component';
import { JogosComponent } from './views/jogos/jogos.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ContatoComponent,
    CarrosselComponent,
    BannerComponent,
    DestaqueComponent,
    NovidadesComponent,
    GaleriaComponent,
    FormularioComponent,
    JogosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
