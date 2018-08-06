import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CoordProvider } from './../../providers/coord/coord';
/**
 * Generated class for the Version3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-version3',
  templateUrl: 'version3.html',
})
export class Version3Page {
  info;
  infoList;
  display=1;
  city
  City:string='';
  location
  myWeather;
  counter = 0;
  town: string;
  temperatureMain;
  tempMax;
  tempMin;
  unit;
  temperature;

  flipState: string = 'notFlipped';
  flynInOutState: String = 'out';
  fadeState: String = 'visible';
  bounceState: string = 'visible';
  
  visibleState = 'visible';
  conditionCode;
  iconCode:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,public coord: CoordProvider) {
    this.coord.getWeatherData(this.city).subscribe(myInfo =>{
      this.info=myInfo;
       this.iconCode = this.info.weather[0].icon;
       this.conditionCode = "http://openweathermap.org/img/w/"+ this.iconCode +".png";
     });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Version3Page');
  }
  search(){
    this.coord.getWeatherData(this.city).subscribe(coord =>{
      this.info=coord;
      this.conditionCode="http://openweathermap.org/img/w/"+ this.iconCode +".png";
    })
  }
   myresu(){
     this.coord. getWeatherData(this.city).subscribe(coord =>{this.info=coord
       console.log(this.infoList=this.info.coord.weather)});
       this.display=1; 
   }
   
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

}
 console.log("-----> outside" + this.temperatureMain);
 if(this.unit === "celcius"){
     console.log("---------------------->in cel" + this.info.main.temp);
       this.temperatureMain = (this.info.main.temp - 273.15).toFixed(1);
       this.tempMax = (this.info.main.temp_max - 273.15).toFixed(1);
       this.tempMin = (this.info.main.temp_min - 273).toFixed(1);
   }else if(this.unit ==="Kelvins"){
     console.log("---------------------> in Kelvin" + this.unit );
     this.temperatureMain = (this.info.main.temp).toFixed(1);
     this.tempMax = (this.info.main.temp_max).toFixed(1);
     this.tempMin = (this.info.main.temp_min).toFixed(1);
   }else if(this.unit === "Farenheight"){
     
     console.log("--------------------------> in Faren" + this.unit );
     this.temperatureMain = (this.info.main.temp - 457.67).toFixed(1);
     this.tempMax = (this.info.main.temp_max - 457.67).toFixed(1);
     this.tempMin = (this.info.main.temp_min - 457.67).toFixed(1);
   }
 