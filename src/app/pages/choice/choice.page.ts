import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.page.html',
  styleUrls: ['./choice.page.scss'],
})
export class ChoicePage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  openS1() {
    this.navCtrl.navigateForward('choice2')
  }

}
