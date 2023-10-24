import { Injectable } from '@angular/core';
// Any time HTTP is used, this must be imported 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Gift } from './gift-form.component';


// This means the app is already aware of it, so it's already available 
@Injectable({
  providedIn: 'root'
})
export class GiftFormService {
    // This variable points to the Spring Boot API's URL and is where the Angular front-end will send HTTP requests to interact with the back-end 
    private apiUrl : string = 'http://localhost:9092/api';

    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };


  constructor(private http : HttpClient) { }

  getAllGifts() {
    return this.http.get(`${this.apiUrl}/gifts/`);
  }
  
  createGift(newGift : any) : Observable<any> {
    return this.http.post(`${this.apiUrl}/gifts/`, newGift, this.httpOptions);
  }

  updateGift(id : number, updatedGift : any) : Observable<any> {
    return this.http.put(`${this.apiUrl}/gifts/${id}/`, updatedGift, this.httpOptions)
  }


}