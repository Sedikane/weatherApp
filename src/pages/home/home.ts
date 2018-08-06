import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { CoordProvider } from './../../providers/coord/coord';
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  info;
  infoList;
  display=1;
  city:string;

  constructor(public navCtrl: NavController, public navParams: NavParams,public coord: CoordProvider ) {
  
    this.coord. getWeatherData(this.city).subscribe(coord =>{this.info=coord
      console.log(this.infoList=this.info.coord.weather)});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
  myresu(){
    this.coord. getWeatherData(this.city).subscribe(coord =>{this.info=coord
      console.log(this.infoList=this.info.coord.weather)});
  
      // this.coord. getWeatherDataJouburg().subscribe(coord =>{this.info=coord
      //   console.log(this.infoList=this.info.coord.weather)});
      this.display=1;
    }
}
