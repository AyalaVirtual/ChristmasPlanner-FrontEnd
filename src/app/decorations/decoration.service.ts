import { Injectable } from '@angular/core';
// Any time HTTP is used, this must be imported 
import { HttpClient } from '@angular/common/http';


// This means the app is already aware of it, so it's already available 
@Injectable({
  providedIn: 'root'
})
export class DecorationService {
    private apiUrl : string = 'http://localhost:9092/api'

  constructor(private http : HttpClient) { }

  getAllDecorations() {
    return this.http.get(`${this.apiUrl}/decorations`);
  }

  getDecorationById(decorationId : number) {
    return this.http.get(`${this.apiUrl}/decorations/{decorationId}`);
  }

  createDecoration(decoration : any) {
    return this.http.post(`${this.apiUrl}/decorations`, decoration);
  }

  updateDecoration(decorationId : number, decoration : any) {
    return this.http.put(`${this.apiUrl}/decorations`, decoration)
  }

}