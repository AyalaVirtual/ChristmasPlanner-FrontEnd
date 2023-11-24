import { Component, OnInit, Input } from '@angular/core';
import { StockingStuffersService } from './stocking-stuffer.service';


export type StockingStuffer = {
  id : number;
  name : String;
  description : String;
  tag : String;
  image : String;
 }


@Component({
  selector: 'app-stocking-stuffers',
  templateUrl: './stocking-stuffers.component.html',
  styleUrls: ['./stocking-stuffers.component.css']
})
export class StockingStuffersComponent implements OnInit {
  // This declares a property to store stocking stuffers 
  stockingStuffers : any[] = [];


  constructor(private stockingStuffersService : StockingStuffersService) {}


  /*
    This method is called when the component is initialized. Within this method, the fetchStockingStuffers() function is called to retrieve the stocking stuffers.
*/
  ngOnInit(): void {
    this.fetchStockingStuffers();

  
/* 
   In this method, the stockingStufferCreated$ observable from the stocking stuffer service is subscribed to using the .subscribe() method, which means that whenever a stocking stuffer is created, the fetchStockingStuffers() function will be called again to update the list of stocking stuffers.
*/ this.stockingStuffersService.stockingStufferCreated$.subscribe(() => {
      this.fetchStockingStuffers();
    });
  }


  /* 
    This method fetches the stocking stuffers from the stocking stuffer service by calling the getAllStockingStuffers() function from the stocking stuffers service.  This returns an observable that the .subscribe() method is used to subscribe to so that when a response is received, the stocking stuffers property of the component is assigned the data retrieved from the response. As a result, whenever a new stocking stuffer is created, the list of stocking stuffers is updated.
*/
  fetchStockingStuffers(): void {
    this.stockingStuffersService.getAllStockingStuffers().subscribe(
      (response : any) => {
        // This assigns the retrieved data to the component property 
        this.stockingStuffers = response.data;
      }
    )
  }

}
