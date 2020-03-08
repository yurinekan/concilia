import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choice2',
  templateUrl: './choice2.page.html',
  styleUrls: ['./choice2.page.scss'],
})
export class Choice2Page implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  openS1() {
    this.navCtrl.navigateRoot('reconcile')
  }
  openS2() {
    this.navCtrl.navigateRoot('tabs/tab1')
  }
}
