import { Component, OnInit } from '@angular/core';
import { ColorlistService } from '../colorlist.service';
import { Router } from '@angular/router';
import { weatherapiformat } from '../colorlist.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import {fadein , rotate} from '../animations';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  animations: [fadein,rotate]
})
export class TestComponent {
  public weatherdata: weatherapiformat;
  public enteredplace: string = 'goa';
  public temperature: number;
  public humidity: number;
  public wind: number;
  public cloud: number;
  public pressure: number;
  public condition: string = '';
  public name: string = '';
  public region: string = '';
  public country: string = '';
  public Showprogressbar: boolean = false;
  public rotate:string = 'beforeapi';


  constructor(private _city: ColorlistService, private router: Router, private _snack: MatSnackBar) { }

  getcityweather() {
    this.Showprogressbar = true;
    this._city.getWeather(this.enteredplace).subscribe({next:(data: weatherapiformat) => {
      this.weatherdata = data;
      console.log(this.weatherdata);
      this.rotate = 'afterapi';
      this.temperature = this.weatherdata.current.temp_c;
      this.condition = this.weatherdata.current.condition.text;
      this.humidity = this.weatherdata.current.humidity;
      this.wind = this.weatherdata.current.wind_kph;
      this.cloud = this.weatherdata.current.cloud;
      this.pressure = this.weatherdata.current.pressure_in;
      this.name = this.weatherdata.location.name;
      this.region = this.weatherdata.location.region;
      this.country = this.weatherdata.location.country;
      this.Showprogressbar = false;      
    }, error: (err) => {this.openSnackBar(err.error.error.message);
    }});    
  }

  validatePlace() {
    this.enteredplace ? this.getcityweather() : this.openSnackBar('Enter Place name to get report');
  }

  openSnackBar(text:string) {
    this._snack.open(text, 'X', {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'right',
      panelClass: 'red-snackbar'
    });
  }

}
