import { Component, OnInit, Input } from '@angular/core';
import { StockingStufferItemService } from './stocking-stuffer-item.service';
import {ActivatedRoute } from '@angular/router';


export type StockingStuffer = {
  id : number;
  name : String;
  description : String;
 }


@Component({
  selector: 'app-stocking-stuffer-item',
  templateUrl: './stocking-stuffer-item.component.html',
  styleUrls: ['./stocking-stuffer-item.component.css']
})
export class StockingStufferItemComponent implements OnInit {
  // This declares a property to store an individual decoration 
  stockingStufferItem : any;


  constructor(private stockingStufferItemService : StockingStufferItemService, private route: ActivatedRoute) {}

  
  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id') || '';
    // This checks if decoration id is not null or undefined before making the HTTP request 
    if (id) {
      this.stockingStufferItemService.getStockingStufferById(+id)
        .subscribe((stockingStufferItem) => {
          // This assigns the retrieved data to the component property 
          this.stockingStufferItem = stockingStufferItem;
        // Remove this in production 
        console.log(stockingStufferItem);
      });
    }
  };
  

}

