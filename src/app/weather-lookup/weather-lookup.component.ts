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
  private clouds: string;
  private temperature: string;
  private humidity: string;
  private stationName: string;
  private observation: string;
  private windSpeed: string;


  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
  }

  private clearModalData() {
    this.lat = '';
    this.lng = '';
    this.city = '';
    this.state = '';
    this. clouds = '';
    this.temperature = '';
    this.humidity = '';
    this.stationName = '';
    this.observation = '';
    this.windSpeed = '';
  }
  onClick() {
    this.clearModalData();
    this.dataService.getByPostalCode(this.zipcode).subscribe(
      response => {
        const info = response.postalCodes[0];
        this.lat = info.lat;
        this.lng = info.lng;
        this.city = info.placeName;
        this.state = info.adminCode1;

        this.dataService.getNearByWeather(this.lat, this.lng).subscribe(
          resp => {
            const observation = resp.weatherObservation;

            this.clouds = observation.clouds;
            this.temperature = observation.temperature;
            this.humidity = observation.humidity;
            this.stationName = observation.stationName;
            this.observation = observation.observation;
            this.windSpeed = observation.windSpeed;

          }
        );
      }
    );


  }

  onReset() {
    this.zipcode = '63755';
  }
}
