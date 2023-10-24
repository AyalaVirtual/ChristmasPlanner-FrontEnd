import { Component, OnInit, Input } from '@angular/core';
import { GiftService } from './gift.service';


export type Gift = {
  id : number;
  name : String;
  description : String;
  tag : String;
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


  ngOnInit(): void {
    this.giftService.getAllGifts().subscribe(
      (response : any) => {
        // This assigns the retrieved data to the component property 
        this.gifts = response.data;
      }
    )
  };

}
