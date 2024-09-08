import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-recuperar-contrasena',
  templateUrl: './recuperar-contrasena.page.html',
  styleUrls: ['./recuperar-contrasena.page.scss'],
})
export class RecuperarContrasenaPage implements OnInit {

  public usuario: string ="";

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  recuperar(){
    if (this.usuario == "patito"){
      this.navCtrl.navigateRoot("/home");
    }else{
      console.log("no hermano que paso")
    }
  }

}
