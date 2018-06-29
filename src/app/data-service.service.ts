import { Injectable } from '@angular/core';
import {Http, Headers, Response} from "@angular/http";
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpModule } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private baseUrl: string = "http://api.geonames.org/";
  private apiKey: string = "smithandrewl";

    constructor(public http: Http) {
    }
  
    public getByPostalCode(postalCode:string):  Observable<Response> {
      
        return this.http.get(
          this.baseUrl + "postalCodeSearchJSON", 
          {
            params: {
              postalcode : postalCode,
              maxRows    : "1",
              username   : this.apiKey
            }
          }
        );
    }
}
