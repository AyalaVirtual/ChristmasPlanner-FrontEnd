import { Injectable } from '@angular/core';
// Any time HTTP is used, this must be imported 
import { HttpClient } from '@angular/common/http';


// This means the app is already aware of it, so it's already available 
@Injectable({
  providedIn: 'root'
})
export class StockingStuffersService {
    private apiUrl : string = 'http://localhost:9092/api'

  constructor(private http : HttpClient) { }

  getAllStockingStuffers() {
    return this.http.get(`${this.apiUrl}/stockingstuffers`);
  }

  getStockingStufferById(stockingStufferId : number) {
    return this.http.get(`${this.apiUrl}/stockingstuffers/{stockingStufferId}`);
  }

  createStockingStuffer(stockingStuffer : any) {
    return this.http.post(`${this.apiUrl}/stockingstuffers`, stockingStuffer);
  }

  updateStockingStuffer(stockingStufferId : number, stockingStuffer : any) {
    return this.http.put(`${this.apiUrl}/stockingstuffers`, stockingStuffer)
  }

}