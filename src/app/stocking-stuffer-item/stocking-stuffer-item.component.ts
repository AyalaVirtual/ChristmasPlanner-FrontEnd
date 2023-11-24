import { Component, OnInit, Input } from '@angular/core';
import { StockingStufferItemService } from './stocking-stuffer-item.service';
import {ActivatedRoute } from '@angular/router';


export type StockingStuffer = {
  id : number;
  name : String;
  description : String;
  image: String;
 }


@Component({
  selector: 'app-stocking-stuffer-item',
  templateUrl: './stocking-stuffer-item.component.html',
  styleUrls: ['./stocking-stuffer-item.component.css']
})
export class StockingStufferItemComponent implements OnInit {
  // This declares a property to store an individual stocking stuffer 
  stockingStufferItem : any;


  // ActivatedRoute is a service that provides information about the currently activated route. Passing in ActivatedRoute as a parameter makes the URL routes available to the class. 
  constructor(private stockingStufferItemService : StockingStufferItemService, private route: ActivatedRoute) {}

  
  /*
    This retrieves the ID from the URL route parameters using the "snapshot" of the ActivatedRoute service. It then checks if the ID is not empty. If it is not empty, it calls the "getStockingStufferById" method of the "stockingStufferItemService" service, passing the ID as a parameter. This method returns an observable that emits the stocking stuffer item data. It then uses the "subscribe" method on the observable to handle the emitted stocking stuffer item data and stores it in the "stockingStufferItem" property of the component.
  */
  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id') || '';
    
    if (id) {
      this.stockingStufferItemService.getStockingStufferById(+id)
        .subscribe((stockingStufferItem) => {
          this.stockingStufferItem = stockingStufferItem.data;
      });
    }
  };
  

}

