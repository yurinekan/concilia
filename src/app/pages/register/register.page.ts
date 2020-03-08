import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { NavController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  user: User;

  nome: string;
  sobrenome: string;
  email: string;
  senha: string;
  confirmar: string;
  numero: string;
  cpf: string;
  exames: boolean;

  public fGroup: FormGroup;

  constructor(private navCtrl: NavController, private fBuilder: FormBuilder, private menuCtrl: MenuController) {
    menuCtrl.swipeGesture(false)
    this.fGroup = this.fBuilder.group({
      'nome': [this.nome, Validators.compose([
        Validators.required,
        Validators.maxLength(30),
        Validators.pattern('^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$')
      ])],
      'sobrenome': [this.sobrenome, Validators.compose([
        Validators.required,
        Validators.maxLength(30),
        Validators.pattern('^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$')
      ])],
      'email': [this.email, Validators.compose([
        Validators.required,
        Validators.email
      ])],
      'senha': [this.senha, Validators.compose([
        Validators.required,
        Validators.minLength(8)

      ])],
      'confirmar': [this.confirmar, Validators.compose([
        Validators.required,
      ])],
      'numero': [this.numero, Validators.compose([
        Validators.required,
        Validators.pattern("^[0-9]*$"),
        Validators.minLength(8)
      ])],
      'cpf': [this.cpf, Validators.compose([
// opcional
      ])],
      'exames': [this.exames]
    },
      { validator: this.checkPasswords }
    );
  }

  menu() {
    this.navCtrl.navigateBack('');
  }

  register() {
    this.user = new User(this.nome, this.sobrenome, this.email, this.numero, this.cpf, this.exames, this.senha)
    this.navCtrl.navigateForward('choice');
  }

  checkPasswords(group: FormGroup) {
    let pass = group.get('senha').value;
    let confirmPass = group.get('confirmar').value;

    if(confirmPass !== null){
    return pass === confirmPass ? null : { notSame: true }
    }
  }
  ngOnInit(){
    
  }
}
