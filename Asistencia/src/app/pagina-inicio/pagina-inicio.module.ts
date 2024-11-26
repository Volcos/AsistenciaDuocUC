import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaInicioPageRoutingModule } from './pagina-inicio-routing.module';

import { PaginaInicioPage } from './pagina-inicio.page';
import { MatTabsModule } from '@angular/material/tabs';
import { BarcodeScanningModalComponent } from './barcode-scanning-modal.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaInicioPageRoutingModule,
    MatTabsModule 
  ],
  declarations: [PaginaInicioPage,BarcodeScanningModalComponent]
})
export class PaginaInicioPageModule {}
