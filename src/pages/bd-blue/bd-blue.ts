import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the BdBluePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bd-blue',
  templateUrl: 'bd-blue.html',
  
})
export class BdBluePage {
  items: Observable<any[]>;
  constructor(public navCtrl: NavController, afDB: AngularFireDatabase, public navParams: NavParams) {
    this.items = afDB.list('zonas').valueChanges();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BdBluePage');
  }

}
