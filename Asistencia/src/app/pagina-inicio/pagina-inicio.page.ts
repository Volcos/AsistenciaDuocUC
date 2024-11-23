import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {Router} from '@angular/router';
import * as moment from 'moment';
import { JsonApiService } from '../services/json-api.service';

import { AuthService } from '../auth.service';

import {Camera, CameraResultType, CameraSource} from '@capacitor/camera';

@Component({
  selector: 'app-pagina-inicio',
  templateUrl: './pagina-inicio.page.html',
  styleUrls: ['./pagina-inicio.page.scss'],
})
export class PaginaInicioPage implements OnInit {
  datos:any;
  time: string = '';
  asignaturas: any[] = [];

  image: string | undefined;

  constructor(private navCtrl: NavController,private router:Router, private jsonaApiService: JsonApiService,
    private authService: AuthService
  ) { }
  
  //Metodo para la fotooo

  async tomarFoto(){
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera
    });

    this.image = image.dataUrl;
  }

  ngOnInit() {
    const navegacion = this.router.getCurrentNavigation();
    this.datos= navegacion?.extras?.state?.['user'];
    this.updateTime();
    setInterval(()=>this.updateTime(),1000);
    this.jsonaApiService.getAsignaturasDelUsuario(1).subscribe(data => {
      this.asignaturas = data;
    });
  }

  updateTime(){
    this.time = moment().format('LTS');
  }

  sigPagina() {
    this.navCtrl.navigateForward('/pagina-inicio');
  }

  antPagina() {
    this.authService.logout();
    this.navCtrl.navigateBack('/home');
  }

  pagPrincipal() {
    this.authService.logout();
    this.navCtrl.navigateRoot('/home');
  }

}
