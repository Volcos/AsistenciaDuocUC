import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public usuario: string = "";
  public contrasena: string ="";

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  
  async sigPagina() {
    const state = {
      user: this.usuario
    }
    if (await this.authService.login(this.usuario,this.contrasena)){
      this.router.navigate(['/pagina-inicio'],{state});
    }else {
      alert('NAoNAO');
    }
  }

  recuContra(){
    this.router.navigate(['/recuperar-contrasena'])
  }

}
