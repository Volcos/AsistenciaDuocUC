import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  public correo: string = "";
  public contrasena: String = "";

  
  constructor(private usuarioService: UsuarioService, private navCtrl: NavController,private storage: Storage) {
    this.initStorage();
  }

  async initStorage(){
    await this.storage.create();
  }

  ngOnInit() {
  }

  async guardarRegistro() {
    const usuario = {
      correo: this.correo,
      password: this.contrasena,
    };
    
    this.storage.set(this.correo,this.contrasena);
    console.log('Nombre guardado:', this.correo);
    
    try {
      const resultado = await this.usuarioService.guardarUsuario(usuario);
      console.log('Guardado en la base de datos:', resultado);
      this.navCtrl.navigateRoot('/home');
    } catch (error) {
      console.error('Error al guardar usuario:', error);
    }
  }

  async limpiarStorage() {
    await this.storage.clear();
    console.log('Almacenamiento limpiado');
  }
}
