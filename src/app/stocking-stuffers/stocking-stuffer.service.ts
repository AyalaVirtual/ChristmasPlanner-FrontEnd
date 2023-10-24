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


    private stockingStufferCreatedSource = new Subject<void>();
    stockingStufferCreated$ = this.stockingStufferCreatedSource.asObservable();

    stockingStufferCreated() {
      console.log('stockingStufferCreated called');
      this.stockingStufferCreatedSource.next();
    }  


  constructor(private http : HttpClient) { }

  getAllStockingStuffers() {
    return this.http.get(`${this.apiUrl}/stockingstuffers/`);
  }


}