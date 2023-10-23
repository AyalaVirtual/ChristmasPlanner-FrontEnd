import { Component, OnInit } from '@angular/core';
import { StockingStuffersService } from '../stocking-stuffers/stocking-stuffer.service';


export type StockingStuffer = {
  name : String;
  description : String;
 }

@Component({
  selector: 'app-stocking-stuffer-page',
  templateUrl: './stocking-stuffer-page.component.html',
  styleUrls: ['./stocking-stuffer-page.component.css']
})
export class StockingStufferPageComponent implements OnInit {
  public stockingStuffers : StockingStuffer[] = [];

  constructor(private stockingStuffersService : StockingStuffersService) {}

  ngOnInit() : void {
    this.stockingStuffersService.getAllStockingStuffers().subscribe(
      ( data : any) => {
        this.stockingStuffers = data; // Assign the retrieved data to the component property
        console.log(data);
      }
    );
  }

}

