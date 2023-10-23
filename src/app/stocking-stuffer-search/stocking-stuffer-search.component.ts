import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { StockingStuffersService } from '../stocking-stuffers/stocking-stuffer.service';
import { StockingStuffer } from '../stocking-stuffer-page/stocking-stuffer-page.component';


@Component({
  selector: 'app-stocking-stuffer-search',
  templateUrl: './stocking-stuffer-search.component.html',
  styleUrls: ['./stocking-stuffer-search.component.css']
})
export class StockingStufferSearchComponent implements OnInit {
  input : string = '';
  stockingStuffer : any = '';
  // This is the observable 
  searchSubject = new Subject();

  constructor(private stockingStuffersService : StockingStuffersService) {}

  findStockingStuffer(input : string) : void {
    // This publishes that something happened (in this case, the event of the findStockingStuffer() method firing, or receiving the input type) 
    // publishing is a way of communicating information/announcing a change in data 
    // subscribing does something with that data (listens for changes)
    // observables are just a mix of publishing and subscribing  
    this.searchSubject.next(input);
  }

  ngOnInit() : void {
    this.searchSubject
    // this is like a setTimeout() method that only sends another request if you search for something different than the previous search 
    .pipe(debounceTime(1000), distinctUntilChanged())
    .subscribe(input => {
      this.stockingStuffersService.getAllStockingStuffers()
      // This means it's listening in for the response ("Subscribe basically used to take some action after event happen. Like if u have used in API call and if u want to perform some action only after response come u can subscribe that call.")
        .subscribe(response => {
          // Remove this in production 
          console.log(response)
          this.stockingStuffer = response 
        })
    })
  }

}

