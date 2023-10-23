import { Injectable } from '@angular/core';
// Any time HTTP is used, this must be imported 
import { HttpClient, HttpHeaders } from '@angular/common/http';


// This means the app is already aware of it, so it's already available 
@Injectable({
  providedIn: 'root'
})
export class DecorationFormService {
    // This variable points to the Spring Boot API's URL and is where the Angular front-end will send HTTP requests to interact with the back-end 
    private apiUrl : string = 'http://localhost:9092/api';

    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };


  constructor(private http : HttpClient) { }

  
  createDecoration(decoration : any) {
    return this.http.post(`${this.apiUrl}/decorations/`, decoration);
  }

  updateDecoration(decorationId : number, decoration : any) {
    return this.http.put(`${this.apiUrl}/decorations/`, decoration)
  }


}