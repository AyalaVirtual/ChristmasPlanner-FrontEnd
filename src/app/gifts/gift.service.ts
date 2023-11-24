import { Injectable } from '@angular/core';
// Any time HTTP is used, this must be imported 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';


// This means the app is already aware of it, so it's already available 
@Injectable({
  providedIn: 'root'
})
export class GiftService {
  // This variable points to the Spring Boot API's URL and is where the Angular front-end will send HTTP requests to interact with the back-end 
  private apiUrl : string = 'http://localhost:9092/api';
    
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };


  /* 
    The "giftCreated$" variable is defined as the Observable version of the "giftCreatedSource" subject. This allows other parts of the code to subscribe to this Observable and be notified when a gift is created.
  */
  private giftCreatedSource = new Subject<void>();
  giftCreated$ = this.giftCreatedSource.asObservable();


  // This function emits a new event by calling the "next" method on the "giftCreatedSource" subject. 
  giftCreated() {
    this.giftCreatedSource.next();
  }


  constructor(private http : HttpClient) { }


  // This sends an HTTP GET request to the API's "/gifts" endpoint using the "http" instance and returns the response from the API. 
  getAllGifts() {
    return this.http.get(`${this.apiUrl}/gifts/`);
  }


}