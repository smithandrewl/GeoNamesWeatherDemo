import { Component, OnInit } from '@angular/core';
import {DataServiceService} from '../data-service.service';

@Component({
  selector: 'app-weather-lookup',
  templateUrl: './weather-lookup.component.html',
  styleUrls: ['./weather-lookup.component.css'],
  providers: [DataServiceService]
})
export class WeatherLookupComponent implements OnInit {

  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
  }
  
  onClick() {
    
    this.dataService.getByPostalCode('63755').subscribe(response => alert(JSON.stringify(response.json())));
    
  }
}
