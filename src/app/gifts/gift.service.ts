import { Injectable } from '@angular/core';
// Any time HTTP is used, this must be imported 
import { HttpClient } from '@angular/common/http';


// This means the app is already aware of it, so it's already available 
@Injectable({
  providedIn: 'root'
})
export class GiftService {
    private apiUrl : string = 'http://localhost:9092/api'

  constructor(private http : HttpClient) { }

  getAllGifts() {
    return this.http.get(`${this.apiUrl}/gifts`);
  }

  getGiftById(giftId : number) {
    return this.http.get(`${this.apiUrl}/gifts/{giftId}`);
  }

  createGift(gift : any) {
    return this.http.get(`${this.apiUrl}/gifts`, gift);
  }

  updateGift(giftId : number, gift : any) {
    return this.http.get(`${this.apiUrl}/gifts`, gift)
  }

}