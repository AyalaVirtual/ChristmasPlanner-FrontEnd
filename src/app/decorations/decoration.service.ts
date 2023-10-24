import { Injectable } from '@angular/core';
// Any time HTTP is used, this must be imported 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';


// This means the app is already aware of it, so it's already available 
@Injectable({
  providedIn: 'root'
})
export class DecorationService {
    // This variable points to the Spring Boot API's URL and is where the Angular front-end will send HTTP requests to interact with the back-end 
    private apiUrl : string = 'http://localhost:9092/api';

    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };


    private decorationCreatedSource = new Subject<void>();
    decorationCreated$ = this.decorationCreatedSource.asObservable();

    decorationCreated() {
      console.log('decorationCreated called');
      this.decorationCreatedSource.next();
    }


    constructor(private http : HttpClient) { }

    getAllDecorations() {
      return this.http.get(`${this.apiUrl}/decorations/`);
    }

}