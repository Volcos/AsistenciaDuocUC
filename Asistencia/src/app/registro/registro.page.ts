import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  public correo: string = "";
  public contrasena: String = "";

  constructor(private storage: Storage) {
    this.initStorage();
  }

  async initStorage(){
    await this.storage.create();
  }

  ngOnInit() {
  }

  guardarRegistro() {
    
    this.storage.set(this.correo, this.contrasena)
    console.log('Guardadisimo')
  }

  async limpiarStorage() {
    await this.storage.clear();
    console.log('Almacenamiento limpiado');
    }
}
