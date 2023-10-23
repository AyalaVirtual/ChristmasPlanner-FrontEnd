import { Component, OnInit, Input } from '@angular/core';
import { Gift } from '../gift-page/gift-page.component';
import { GiftService } from './gift.service';


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
        this.gifts = response;
        // Remove this in production 
        console.log(response);
      }
    )
  };

}
