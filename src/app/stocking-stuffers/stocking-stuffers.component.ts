import { Component, OnInit, Input } from '@angular/core';
import { StockingStuffer } from '../stocking-stuffer-page/stocking-stuffer-page.component';
import { StockingStuffersService } from './stocking-stuffer.service';


@Component({
  selector: 'app-stocking-stuffers',
  templateUrl: './stocking-stuffers.component.html',
  styleUrls: ['./stocking-stuffers.component.css']
})
export class StockingStuffersComponent implements OnInit {
  // This declares a property to store stocking stuffers 
  stockingStuffers : any[] = [];


  constructor(private stockingStuffersService : StockingStuffersService) {}


  ngOnInit(): void {
    this.stockingStuffersService.getAllStockingStuffers().subscribe(
      (response : any) => {
        // This assigns the retrieved data to the component property 
        this.stockingStuffers = response;
        // Remove this in production 
        console.log(response);
      }
    )
  };

}
