import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaInicioPage } from './pagina-inicio.page';

import { CanDeactivateGuard } from '../candeactivate.guard';

const routes: Routes = [
  {
    path: '',
    component: PaginaInicioPage,
    canDeactivate: [CanDeactivateGuard],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginaInicioPageRoutingModule {}
