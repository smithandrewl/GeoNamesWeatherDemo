import { Component, OnInit } from '@angular/core';
import {DataServiceService} from '../data-service.service';

@Component({
  selector: 'app-weather-lookup',
  templateUrl: './weather-lookup.component.html',
  styleUrls: ['./weather-lookup.component.css'],
  providers: [DataServiceService]
})
export class WeatherLookupComponent implements OnInit {
  public zipcode = '63755';
  private lat: string;
  private lng: string;
  private city: string;
  private state: string;

  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
  }
  onClick() {
    this.dataService.getByPostalCode(this.zipcode).subscribe(
      response => {
        const info = response.postalCodes[0];
        this.lat = info.lat;
        this.lng = info.lng;
        this.city = info.placeName;
        this.state = info.adminCode1;
      }
    );
  }

  onReset() {
    this.zipcode = '63755';
  }
}
