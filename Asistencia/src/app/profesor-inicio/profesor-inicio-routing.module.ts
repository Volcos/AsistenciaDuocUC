import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfesorInicioPage } from './profesor-inicio.page';

import { CanDeactivateGuard } from '../candeactivate.guard';

const routes: Routes = [
  {
    path: '',
    component: ProfesorInicioPage,
    canDeactivate: [CanDeactivateGuard],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfesorInicioPageRoutingModule {}
