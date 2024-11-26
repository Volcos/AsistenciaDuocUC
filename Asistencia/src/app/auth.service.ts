import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { UsuarioService } from './services/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticated = false;
  // CONSTRUCTOR
  constructor(
    private storage: Storage,
    private usuarioService: UsuarioService,
  ) { 
    this.initStorage();
  }

  async initStorage(){
    await this.storage.create();
  }
  
  // FUNCIÓN PARA OBTENER DATOS
  async obtenerDatos(correo: string, password: string) {
    try {
      // Llamamos al servicio que consulta las credenciales en el backend
      const response = await this.usuarioService.verificarCredenciales(correo, password);
      return response.usuario; // Aquí debería devolverse el usuario si es válido
    } catch (error) {
      console.error('Error al obtener datos:', error);
      return null;
    }
  }
  async obtenerDatosLocal(correo: string){
    let datos = await this.storage.get(correo);
    return datos;
  }

  async loginStorage(username: string, password: string){
    try {
      if (password == await this.obtenerDatosLocal(username)){
        this.isAuthenticated = true;
        return true;
      } else {
        console.log('Contraseña incorrecta',await this.obtenerDatosLocal(username))
        return false;
      }
    } catch (error) {
      console.log(error)
      return false;
    }
  }

  // VALIDAR LAS CREDENCIALES PARA LOGEARSE
  async login(correo: string, password: string) {
    try {
      // Primero obtenemos los datos del usuario desde la base de datos
      const usuario = await this.obtenerDatos(correo, password);

      // Si no se encuentra el usuario, la validación falla
      if (!usuario) {
        console.log('Usuario no encontrado');
        return false;
      }

      // Si la validación es exitosa
      this.isAuthenticated = true;
      console.log('Login exitoso');
      return usuario;
    } catch (error) {
        console.error('Error durante el login:', error);
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
