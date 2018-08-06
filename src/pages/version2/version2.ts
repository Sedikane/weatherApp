import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CoordProvider } from './../../providers/coord/coord';
/**
 * Generated class for the Version2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-version2',
  templateUrl: 'version2.html',
})
export class Version2Page {
  info;
  infoList;
  display=1;
  city:string;
  temps: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public coord: CoordProvider) {
    this.coord. getWeatherData(this.city).subscribe(coord =>{this.info=coord
      console.log(this.infoList=this.info.coord.weather)});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Version2Page');
  }

  myresu(){
    this.coord. getWeatherData(this.city).subscribe(coord =>{this.info=coord
      console.log(this.infoList=this.info.coord.weather)});
  
      
      this.display=1;
      
  }
  tempsStatus(){
   
  }
  doRefresh(refresher) {  
    setTimeout(() =>  {  
     refresher.complete();  
    }, 2000);
  }
}
