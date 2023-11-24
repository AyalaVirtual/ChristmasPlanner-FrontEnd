import { Component, OnInit } from '@angular/core';
import { GiftService } from '../gifts/gift.service';


export type Gift = {
  name : String;
  description : String;
 }

@Component({
  selector: 'app-gift-page',
  templateUrl: './gift-page.component.html',
  styleUrls: ['./gift-page.component.css']
})
export class GiftPageComponent implements OnInit {
  public gifts : Gift[] = [];

  constructor(private giftService : GiftService) {}

  ngOnInit() : void {
    this.giftService.getAllGifts().subscribe(
      ( data : any) => {
        // This assigns the retrieved data to the component property. 
        this.gifts = data;
      }
    );
  }

}
