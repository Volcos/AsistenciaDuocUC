import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;
  constructor() { }

  // VALIDAR LAS CREDENCIALES PARA LOGEARSE
  login(username: string, password: string):boolean{
    if (username === 'patito' && password === '1234'){
      this.isAuthenticated = true;
      return true;
    }
    return false;
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
