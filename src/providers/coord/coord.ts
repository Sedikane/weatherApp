import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CoordProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CoordProvider {

  constructor(public http: HttpClient) {
    console.log('Hello CoordProvider Provider');
  }
  getWeatherData(city){
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q='+city+'&APPID=00e9945b6ccac0004bcb2afb6fd28849');
  }
}
