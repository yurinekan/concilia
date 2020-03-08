import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
pass;
email;
eye = true;
  constructor(private navCtrl: NavController, private toastCtrl: ToastController) { }

  ngOnInit() {
  }
  nav(a) {
    this.navCtrl.navigateForward(`${a}`)
  }
  async login() {
    if(this.pass != null && this.email != null) {
      this.navCtrl.navigateRoot('choice')
    } else {
      const toast = await this.toastCtrl.create({
        message: 'Preencha os campos para entrar',
        duration: 3000,
        position: 'top',
        cssClass: "my-custom-class",
      });
      toast.present();
    }
  }
  seePass() {    
    this.eye = !this.eye;
  }
}