import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-recuperar-contrasena',
  templateUrl: './recuperar-contrasena.page.html',
  styleUrls: ['./recuperar-contrasena.page.scss'],
})
export class RecuperarContrasenaPage implements OnInit {

  public usuario: string ="";
  public flag: boolean =false;
  public valido: boolean = false;
  constructor(private navCtrl: NavController, private apiService :ApiService) { }
  public codigo: string ="";
  ngOnInit() {
  }
  enviarCorreo(){
    if (this.usuario === "patito"){
      this.flag = true;
      this.apiService.enviarCorreo('be.vargast@duocuc.cl','mi primer correo que emocion', '<p>This is a test email</p>')
        .subscribe({
          next: response => console.log('Salio mal D:', response),
          error: error => console.error('Error sending email', error)
        });
    }
  }

  recuperar(){
    if (this.usuario == "patito"){
      this.navCtrl.navigateRoot("/home");
    }else{
      console.log("no hermano que paso")
    }
  }

  validar(){
    if (this.codigo = "1234"){
      this.valido = true;
    }
  }
}
