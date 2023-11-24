import { Component, OnInit, Input } from '@angular/core';
import { GiftService } from './gift.service';


export type Gift = {
  id : number;
  name : String;
  description : String;
  tag : String;
  image : String;
 }


@Component({
  selector: 'app-gifts',
  templateUrl: './gifts.component.html',
  styleUrls: ['./gifts.component.css']
})
export class GiftsComponent implements OnInit {
  // This declares a property to store gifts 
  gifts : any[] = [];


  constructor(private giftService : GiftService) {}


  // This method is called when the component is initialized. Within this method, the fetchGifts() function is called to retrieve the gifts. 
  ngOnInit(): void {
    this.fetchGifts();


  /* 
    In this method, the giftCreated$ observable from the gift service is subscribed to using the .subscribe() method, which means that whenever a gift is created, the fetchGifts() function will be called again to update the list of gifts.
  */
  this.giftService.giftCreated$.subscribe(() => {
      this.fetchGifts();
    });
  }


  /* 
    This method fetches the gifts from the gift service by calling the getAllGifts() function from the gift service. This returns an observable that the .subscribe() method is used to subscribe to so that when a response is received, the gifts property of the component is assigned the data retrieved from the response. As a result, whenever a new gift is created, the list of gifts is updated.
  */
  fetchGifts() : void {  
    this.giftService.getAllGifts().subscribe(
      (response : any) => {
        this.gifts = response.data;
      }
    )
  }


}
