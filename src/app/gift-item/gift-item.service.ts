import { Injectable } from '@angular/core';
// Any time HTTP is used, this must be imported 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Gift } from './gift-item.component';


// This means the app is already aware of it, so it's already available 
@Injectable({
  providedIn: 'root'
})
export class GiftItemService {
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
    This function takes an id parameter of type 'number' and returns an Observable object (which are used to handle asynchronous data streams) that represents the HTTP response from the API. It then sends an HTTP GET request to the specified URL, which includes the id parameter to retrieve the gift items from the API.
                   */
  getGiftById(id : number) : Observable<any> {
    return this.http.get(`${this.apiUrl}/gifts/${id}/`);
  }


  /* 
    This method takes an id parameter and a gift parameter of type 'any' and returns an Observable object. It then sends an HTTP PUT request to the specified URL, which includes the id parameter and the gift parameter as the request body. This updates gift items from the API.
             */
  updateGift(id : number, gift : any) : Observable<any> {
    return this.http.put(`${this.apiUrl}/gifts/${id}/`, gift)
  }
  

}