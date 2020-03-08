import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reconcile',
  templateUrl: './reconcile.page.html',
  styleUrls: ['./reconcile.page.scss'],
})
export class ReconcilePage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  back() {
    this.navCtrl.navigateRoot('choice')
  }
}
