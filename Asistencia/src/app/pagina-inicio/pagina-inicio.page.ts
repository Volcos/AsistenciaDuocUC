import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, Platform } from '@ionic/angular';
import {Router} from '@angular/router';
import * as moment from 'moment';
import { JsonApiService } from '../services/json-api.service';

import { AuthService } from '../auth.service';

import { BarcodeScanningModalComponent } from './barcode-scanning-modal.component';
import { LensFacing, BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';

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

  scanResult = '';

  flag = false;
  constructor(
    private navCtrl: NavController,
    private router:Router, 
    private jsonaApiService: JsonApiService,
    private authService: AuthService,
    private modalController: ModalController,
    private platform: Platform,
  ) { }
  
  //Metodo para la fotooo

  async startScan() {
    const modal = await this.modalController.create({
    component: BarcodeScanningModalComponent,
    cssClass: 'barcode-scanning-modal',
    showBackdrop: false,
    componentProps: { 
      formats: [],
      LensFacing: LensFacing.Back
     }
    });
  
    await modal.present();
  
    const { data } = await modal.onWillDismiss();

    if(data){
      this.flag = true;
      this.scanResult = data?.barcode?.displayValue;
    }

    if(this.flag){
      window.location.href = this.scanResult;
    }
  }

  ngOnInit() {
    const navegacion = this.router.getCurrentNavigation();
    this.datos= navegacion?.extras?.state?.['user'];
    this.updateTime();
    setInterval(()=>this.updateTime(),1000);
    this.jsonaApiService.getAsignaturasDelUsuario(1).subscribe(data => {
      this.asignaturas = data;
    });

    if(this.platform.is('capacitor')){
      BarcodeScanner.isSupported().then();
      BarcodeScanner.checkPermissions().then;
      BarcodeScanner.removeAllListeners();
    }
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
