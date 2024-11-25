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
      // Verifica las credenciales en el backend
      // const datosUsuario = await this.usuarioService.verificarCredenciales(this.correo, this.contrasena);
      const resultado = await this.authService.login(this.correo, this.contrasena);
      if (resultado) {
        console.log('Login exitoso. Redirigiendo...');
        this.router.navigate(['/pagina-inicio'], {
          state: { correo: this.correo },
        });
      } else {
        alert('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      alert('Ocurrió un problema en el servidor.');
    }
    //   console.log('Login exitoso. Datos del usuario:', datosUsuario);

    //   // Redirige a la página de inicio
    //   this.router.navigate(['/pagina-inicio'], {
    //   state: { correo: datosUsuario.usuario.correo },
    //   });
    // } catch (error) {
    //     console.error('Error al iniciar sesión:', error);
    //     alert('Credenciales incorrectas o problema en el servidor.');
    // }
  } 

  botonBorrar(){
    this.router.navigate(['/registro'])
  }

  recuContra(){
    this.router.navigate(['/recuperar-contrasena'])
  }

}
  //////////////BORRAR ESTE BOTON ESTA DE PRUEBAS NOMAS

