import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public usuario: string = "";
  public contrasena: string ="";
  constructor(private navCtrl: NavController) {}

  sigPagina() {
    this.navCtrl.navigateForward('/pagina-inicio');
  }

  antPagina() {
    this.navCtrl.navigateBack('/home');
  }

  pagPrincipal() {
    this.navCtrl.navigateRoot('/home');
  }
}
