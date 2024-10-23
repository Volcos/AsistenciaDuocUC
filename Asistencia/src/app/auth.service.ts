import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticated = false;
  // CONSTRUCTOR
  constructor(
    private storage: Storage,
  ) { 
    this.initStorage();
  }

  async initStorage(){
    await this.storage.create();
  }
  // FUNCIÓN PARA OBTENER DATOS
  async obtenerDatos(correo: string){
    let datos = await this.storage.get(correo);
    return datos;
  }

  // VALIDAR LAS CREDENCIALES PARA LOGEARSE
  async login(username: string, password: string){
    try {
      if (password == await this.obtenerDatos(username)){
        this.isAuthenticated = true;
        return true;
      } else {
        console.log('Contraseña incorrecta',await this.obtenerDatos(username))
        return false;
      }
    } catch (error) {
      console.log(error)
      return false;
    }
  }

  // VALIDAR QUE EL USUARIO ESTE LOGEADO
  isLoggedIn(): boolean{
    return this.isAuthenticated;
  }

  // DESLOGEARSE
  logout(){
    this.isAuthenticated = false;
  }
}
