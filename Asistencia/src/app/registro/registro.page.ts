import { Component, OnInit } from '@angular/core';
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

  // constructor(private storage: Storage) {
  //   this.initStorage();
  // }
  constructor(private usuarioService: UsuarioService) {}

  // async initStorage(){
  //   await this.storage.create();
  // }

  ngOnInit() {
  }

  async guardarRegistro() {
    const usuario = {
      correo: this.correo,
      password: this.contrasena,
    };

    try {
      const resultado = await this.usuarioService.guardarUsuario(usuario);
      console.log('Guardado en la base de datos:', resultado);
    } catch (error) {
      console.error('Error al guardar usuario:', error);
    }
  }

  // async limpiarStorage() {
  //   await this.storage.clear();
  //   console.log('Almacenamiento limpiado');
  //   }
}
