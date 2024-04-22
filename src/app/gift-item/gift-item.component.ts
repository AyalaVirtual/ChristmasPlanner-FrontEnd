import { Component, OnInit, Input } from '@angular/core';
import { GiftItemService } from './gift-item.service';
import {ActivatedRoute } from '@angular/router';


export type Gift = {
  id : number;
  name : String;
  description : String;
  image: String;
 }


@Component({
  selector: 'app-gift-item',
  templateUrl: './gift-item.component.html',
  styleUrls: ['./gift-item.component.css']
})
export class GiftItemComponent implements OnInit {
  // This declares a property to store an individual gift 
  giftItem : any;


  // ActivatedRoute is a service that provides information about the currently activated route. Passing in ActivatedRoute as a parameter makes the URL routes available to the class. 
  constructor(private giftItemService : GiftItemService, private route: ActivatedRoute) {}

  
  /*
    This retrieves the ID from the URL route parameters using the "snapshot" of the ActivatedRoute service. It then checks if the ID is not empty. If it is not empty, it calls the "getGiftById" method of the "giftItemService" service, passing the ID as a parameter. This method returns an observable that emits the gift item data. It then uses the "subscribe" method on the observable to handle the emitted gift item data and stores it in the "giftItem" property of the component.
  */
  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id') || '';
    
    if (id) {
      this.giftItemService.getGiftById(+id)
        .subscribe((giftItem) => {
          this.giftItem = giftItem.data;
      });
    }
  };
  

}
