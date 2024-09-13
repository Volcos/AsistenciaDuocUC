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
    const state = {
      user: this.usuario
    }
    if (this.usuario == "patito" && this.contrasena == "1234"){
      this.navCtrl.navigateForward('/pagina-inicio',{state});
    }
  }

  antPagina() {
    this.navCtrl.navigateBack('/home');
  }

  pagPrincipal() {
    this.navCtrl.navigateRoot('/home');
  }

  recuContra(){
    this.navCtrl.navigateForward('/recuperar-contrasena')
  }
}
