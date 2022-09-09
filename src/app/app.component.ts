import { Component, OnInit } from '@angular/core';
import { fadein } from './animations';
import { ColorlistService } from './colorlist.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadein]
})
export class AppComponent implements OnInit {

  constructor(private _weatherAPI: ColorlistService) { }

  ngOnInit(): void {
  }

}
