import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage-angular';

import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
@NgModule({
  declarations: [AppComponent],
  imports: [MatTabsModule,BrowserModule, IonicModule.forRoot(), AppRoutingModule, IonicStorageModule.forRoot(),], 
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy,}, provideHttpClient(), provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
