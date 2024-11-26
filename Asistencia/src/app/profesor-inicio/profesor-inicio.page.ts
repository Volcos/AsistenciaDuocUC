import { Component, OnInit ,ViewEncapsulation } from '@angular/core';

import { NavController } from '@ionic/angular';
import {Router} from '@angular/router';
import * as moment from 'moment';

import { AuthService } from '../auth.service';


@Component({
  selector: 'app-profesor-inicio',
  templateUrl: './profesor-inicio.page.html',
  styleUrls: ['./profesor-inicio.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProfesorInicioPage implements OnInit {

  datos:any;
  time: string = '';
  asignaturas: any[] = [];

  mostrarQr: boolean = false;

  constructor(
    private navCtrl: NavController,
    private router:Router,
    private authService: AuthService) { }

  

  ngOnInit() {
    const navegacion = this.router.getCurrentNavigation();
    this.datos= navegacion?.extras?.state?.['correo'];
    this.updateTime();
    setInterval(()=>this.updateTime(),1000);
  }
  updateTime(){
    this.time = moment().format('LTS');
  }
  sigPagina() {
    this.navCtrl.navigateForward('/pagina-inicio');
  }

  logout() {
    if (this.canDeactivate()) {
      this.authService.logout(); 
      this.router.navigate(['/inicio']);
      console.log("Sesion cerrada")
    }
  }

  canDeactivate(): boolean {
    return confirm('¿Estás seguro que deseas cerrar sesión?');
  }
  // METODO PARA MOSTRAR Y CERRAR QR

  mostrarCodigo(){
    this.mostrarQr = true;
  }

  cerrarCodigo(){
    this.mostrarQr = false;
  }
}
