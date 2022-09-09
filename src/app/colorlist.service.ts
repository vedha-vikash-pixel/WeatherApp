import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface weatherapiformat{
  "location": {
      "name": string,
      "region": string,
      "country": string,
      "lat": number,
      "lon": number,
      "tz_id": string,
      "localtime_epoch": number,
      "localtime": "2022-07-20 18:21"
  },
  "current": {
      "last_updated_epoch":number,
      "last_updated": "2022-07-20 18:15",
      "temp_c": number,
      "temp_f": number,
      "is_day": number,
      "condition": {
          "text": string,
          "icon": string,
          "code": number
      },
      "wind_mph": number,
      "wind_kph": number,
      "wind_degree": number,
      "wind_dir": string,
      "pressure_mb": number,
      "pressure_in": number,
      "precip_mm": number,
      "precip_in": number,
      "humidity": number,
      "cloud": number,
      "feelslike_c": number,
      "feelslike_f": number,
      "vis_km": number,
      "vis_miles": number,
      "uv": number,
      "gust_mph": number,
      "gust_kph": number
  }
}


@Injectable({
  providedIn: 'root'
})

export class ColorlistService {

  
  public cityinfo: String = '';  

  constructor(private http: HttpClient) { }

  public APIurl: string = 'http://api.weatherapi.com/v1/current.json?key=6a3357dc01444c69a62205430221507&q=';

  getWeather(name:String) {    
    return this.http.get<weatherapiformat>(this.APIurl + name);
  }

}
