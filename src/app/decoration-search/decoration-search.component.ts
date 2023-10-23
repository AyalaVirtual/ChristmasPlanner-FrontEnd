import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { DecorationService } from '../decorations/decoration.service';
import { Decoration } from '../decoration-page/decoration-page.component';


@Component({
  selector: 'app-decoration-search',
  templateUrl: './decoration-search.component.html',
  styleUrls: ['./decoration-search.component.css']
})
export class DecorationSearchComponent implements OnInit {
  input : string = '';
  decoration : any = '';

  // This is the observable 
  searchSubject = new Subject();

  constructor(private decorationService : DecorationService) {}

  findDecoration(input : string) : void {
    // This publishes that something happened (in this case, the event of the findDecoration() method firing, or receiving the input type) 
    this.searchSubject.next(input);
  }

  ngOnInit() : void {
    this.searchSubject
    // this is like a setTimeout() method that only sends another request if you search for something different than the previous search 
    .pipe(debounceTime(1000), distinctUntilChanged())
    .subscribe(input => {
      this.decorationService.getAllDecorations()
      // This means it's listening in for the response 
        .subscribe(response => {
          // Remove this in production 
          console.log(response)
          this.decoration = response 
        })
    })
  }

}

