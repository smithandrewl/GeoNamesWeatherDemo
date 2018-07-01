import { Component, OnInit } from '@angular/core';
import {DataServiceService} from '../data-service.service';

@Component({
  selector: 'app-weather-lookup',
  templateUrl: './weather-lookup.component.html',
  styleUrls: ['./weather-lookup.component.css'],
  providers: [DataServiceService]
})
export class WeatherLookupComponent implements OnInit {
  public zipcode = '';

  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
  }
  onClick() {
    this.dataService.getByPostalCode(this.zipcode).subscribe(
      response => {
        const info = response.postalCodes[0];
        alert(info.lat + ', '  + info.lng);
      }
    );
  }
}
