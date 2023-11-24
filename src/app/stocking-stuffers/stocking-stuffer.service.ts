import { Injectable } from '@angular/core';
// Any time HTTP is used, this must be imported 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';


// This means the app is already aware of it, so it's already available 
@Injectable({
  providedIn: 'root'
})
export class StockingStuffersService {
  // This variable points to the Spring Boot API's URL and is where the Angular front-end will send HTTP requests to interact with the back-end 
  private apiUrl : string = 'http://localhost:9092/api';
    
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };


  /* 
    The "stockingStufferCreated$" variable is defined as the Observable version of the "stockingStufferCreatedSource" subject. This allows other parts of the code to subscribe to this Observable and be notified when a stocking stuffer is created.
  */
  private stockingStufferCreatedSource = new Subject<void>();
  stockingStufferCreated$ = this.stockingStufferCreatedSource.asObservable();


  // This function emits a new event by calling the "next" method on the "stockingStufferCreatedSource" subject. 
  stockingStufferCreated() {
    this.stockingStufferCreatedSource.next();
  }  


  constructor(private http : HttpClient) { }


  // This sends an HTTP GET request to the API's "/stockingstuffers" endpoint using the "http" instance. The response from the API is returned. 
  getAllStockingStuffers() {
    return this.http.get(`${this.apiUrl}/stockingstuffers/`);
  }


}