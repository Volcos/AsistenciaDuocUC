import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-pagina-inicio',
  templateUrl: './pagina-inicio.page.html',
  styleUrls: ['./pagina-inicio.page.scss'],
})
export class PaginaInicioPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

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
