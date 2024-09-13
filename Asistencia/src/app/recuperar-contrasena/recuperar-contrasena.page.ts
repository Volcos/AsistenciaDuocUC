import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-recuperar-contrasena',
  templateUrl: './recuperar-contrasena.page.html',
  styleUrls: ['./recuperar-contrasena.page.scss'],
})
export class RecuperarContrasenaPage implements OnInit {

  public usuario: string ="";
  public flag: boolean =false;
  public valido: boolean = false;
  constructor(private navCtrl: NavController) { }
  public codigo: string ="";
  ngOnInit() {
  }
  enviarCorreo(){
    if (this.usuario === "patito"){
      this.flag = true;
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
