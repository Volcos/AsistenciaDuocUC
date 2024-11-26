import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public correo: string = "";
  public contrasena: string ="";

  constructor(
    private authService: AuthService,
    private router: Router,
    private usuarioService: UsuarioService,
  ) {}

  
  async iniciarSesion() {
    try {
      const resultado = await this.authService.login(this.correo, this.contrasena);
      
      if (resultado) {
        console.log('Login exitoso. Redirigiendo...');

        if (resultado.tipo_usuario === 1) {
                // Usuario administrador
                this.router.navigate(['/profesor-inicio'], {
                    state: { correo: resultado.correo },
                });
            } else if (resultado.tipo_usuario === 2) {
                // Usuario regular
                this.router.navigate(['/pagina-inicio'], {
                    state: { correo: resultado.correo },
                });
            } else {
                // Tipo de usuario desconocido
                alert('Tipo de usuario no reconocido.');
            }

      } else {
        alert('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      alert('Ocurrió un problema en el servidor.');
    }
  }

  botonBorrar(){
    this.router.navigate(['/registro'])
  }

  recuContra(){
    this.router.navigate(['/recuperar-contrasena'])
  }

}
  //////////////BORRAR ESTE BOTON ESTA DE PRUEBAS NOMAS

