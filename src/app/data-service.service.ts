import { Injectable } from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private baseUrl = 'http://api.geonames.org/';
  private apiKey = 'smithandrewl';

    constructor(public http: HttpClient) {
    }

  /**
   * Returns information about the specified postal code.
   * @param {string} postalCode The postal code to search by.
   * @returns {Observable<Response>} An observable which will contain the response when completed.
   */
  public getByPostalCode(postalCode: string):  Observable<any> {
        return this.http.get(
          this.baseUrl + 'postalCodeSearchJSON',
          {
            params: {
              postalcode : postalCode,
              maxRows    : '1',
              username   : this.apiKey
            }
          }
        );
    }
}
