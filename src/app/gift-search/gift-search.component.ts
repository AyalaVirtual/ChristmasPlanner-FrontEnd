import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { GiftService } from '../gifts/gift.service';



// ADDED FOR SEARCH 
export type Gift = {
  id : number;
  name : String;
  description : String;
  tag : String;
 }


@Component({
  selector: 'app-search',
  templateUrl: './gift-search.component.html',
  styleUrls: ['./gift-search.component.css']
})
export class GiftSearchComponent implements OnInit {
  // This property holds the user's search input 
  searchTerm: string = '';
  gifts : Gift[] = [];
  gift : any;

  // This is the observable 
  searchSubject = new Subject();


  constructor(private giftService : GiftService) {}


  findGiftByTag(searchTerm : string) {
    // This publishes that something happened (in this case, the event of the findGift() method firing, or receiving the input type)  
    this.searchSubject.next(searchTerm);

    if (this.gift.tag.includes(this.searchSubject.next(searchTerm))) {
          return this.gift;
    }
  }

  ngOnInit() : void {
    this.searchSubject
    // this is like a setTimeout() method that only sends another request if you search for something different than the previous search 
    // .pipe(debounceTime(1000), distinctUntilChanged())
    .subscribe(searchTerm => {
      this.giftService.getAllGifts()
      // This means it's listening in for the response 
        .subscribe(response => {
          // Remove this in production 
          console.log(response)
          this.gift = response 
        })
    })
  }


  // ADDED FOR SEARCH BAR 
  // Populate the 'items' array with your data, e.g., from a service or API.
  search(): void {
    if (this.searchTerm === this.gift.tag)

    this.gifts = this.gifts.filter(gift => gift.tag.toLowerCase().includes(this.searchTerm.toLowerCase()));
  }

}
