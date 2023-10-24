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


  constructor(private http : HttpClient) { }


  getGiftById(id : number) : Observable<any> {
    return this.http.get(`${this.apiUrl}/gifts/${id}/`);
  }

  updateGift(id : number, gift : any) : Observable<any> {
    return this.http.put(`${this.apiUrl}/gifts/${id}/`, gift)
  }
  

}