import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './views/contato/contato.component';
import { HomeComponent } from './views/home/home.component';
import { JogosComponent } from './views/jogos/jogos.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path:'contato',
    component: ContatoComponent
  },
  {
    path:'jogos',
    component: JogosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
