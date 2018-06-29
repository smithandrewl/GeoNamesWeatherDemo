import { Component } from '@angular/core';
import {DataServiceService} from '../app/data-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataServiceService]
})
export class AppComponent {

  constructor(private dataService: DataServiceService) {

  }

  title = 'app';

  onClick() {
    
    this.dataService.getByPostalCode('63755').subscribe(response => alert(JSON.stringify(response.json())));
    
  }
}
  