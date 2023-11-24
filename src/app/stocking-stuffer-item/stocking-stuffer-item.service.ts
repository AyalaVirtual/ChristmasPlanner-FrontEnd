import { Injectable } from '@angular/core';
// Any time HTTP is used, this must be imported 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StockingStuffer } from './stocking-stuffer-item.component';


// This means the app is already aware of it, so it's already available 
@Injectable({
  providedIn: 'root'
})
export class StockingStufferItemService {
    // This variable points to the Spring Boot API's URL and is where the Angular front-end will send HTTP requests to interact with the back-end 
    private apiUrl : string = 'http://localhost:9092/api';

    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };


  // This injects the HttpClient module as a dependency. HttpClient is a module provided by Angular that allows the application to send HTTP requests. 
  constructor(private http : HttpClient) { }


  /* 
    This function takes an id parameter of type 'number' and returns an Observable object (which are used to handle asynchronous data streams) that represents the HTTP response from the API. It then sends an HTTP GET request to the specified URL, which includes the id parameter to retrieve the stocking stuffer items from the API.
  */
  getStockingStufferById(id : number) : Observable<any> {
    return this.http.get(`${this.apiUrl}/stockingstuffers/${id}/`);
  }


  /* 
    This method takes an id parameter and a stockingStuffer parameter of type 'any' and returns an Observable object. It then sends an HTTP PUT request to the specified URL, which includes the id parameter and the stockingStuffer parameter as the request body. This updates stocking stuffer items from the API.
  */
  updateStockingStuffer(id : number, stockingStuffer : any) : Observable<any> {
    return this.http.put(`${this.apiUrl}/stockingstuffers/${id}/`, stockingStuffer)
  }
  

}