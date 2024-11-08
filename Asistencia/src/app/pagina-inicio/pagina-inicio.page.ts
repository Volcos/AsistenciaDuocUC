import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {Router} from '@angular/router';
import * as moment from 'moment';
import { JsonApiService } from '../services/json-api.service';
@Component({
  selector: 'app-pagina-inicio',
  templateUrl: './pagina-inicio.page.html',
  styleUrls: ['./pagina-inicio.page.scss'],
})
export class PaginaInicioPage implements OnInit {
  datos:any;
  time: string = '';
  asignaturas: any[] = [];
  constructor(private navCtrl: NavController,private router:Router, private jsonaApiService: JsonApiService) { }
  
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
    this.navCtrl.navigateBack('/home');
  }

  pagPrincipal() {
    this.navCtrl.navigateRoot('/home');
  }

}
