import { Component, OnInit, Input } from '@angular/core';
import { GiftItemService } from './gift-item.service';
import {ActivatedRoute } from '@angular/router';


export type Gift = {
  id : number;
  name : String;
  description : String;
 }


@Component({
  selector: 'app-gift-item',
  templateUrl: './gift-item.component.html',
  styleUrls: ['./gift-item.component.css']
})
export class GiftItemComponent implements OnInit {
  // This declares a property to store an individual decoration 
  giftItem : any;


  // Passing in ActivatedRoute makes the URL routes available to the class
  constructor(private giftItemService : GiftItemService, private route: ActivatedRoute) {}

  
  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id') || '';
    // This checks if gift id is not null or undefined before making the HTTP request 
    if (id) {
      this.giftItemService.getGiftById(+id)
        .subscribe((giftItem) => {
          // This assigns the retrieved data to the component property 
          this.giftItem = giftItem.data;
      });
    }
  };
  

}
