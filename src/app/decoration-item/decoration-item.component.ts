import { Component, OnInit, Input } from '@angular/core';
import { DecorationItemService } from './decoration-item.service';
import {ActivatedRoute } from '@angular/router';


export type Decoration = {
  id : number;
  name : String;
  materials : String;
  directions : String;
 }


@Component({
  selector: 'app-decoration-item',
  templateUrl: './decoration-item.component.html',
  styleUrls: ['./decoration-item.component.css']
})
export class DecorationItemComponent implements OnInit {
  // This declares a property to store an individual decoration 
  decorationItem : any;


  // Passing in ActivatedRoute makes the URL routes available to the class
  constructor(private decorationItemService : DecorationItemService, private route: ActivatedRoute) {}

  
  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id') || '';
    // This checks if decoration id is not null or undefined before making the HTTP request 
    if (id) {
      this.decorationItemService.getDecorationById(+id)
        .subscribe((decorationItem) => {
          console.log(decorationItem);
          // This assigns the retrieved data to the component property 
          this.decorationItem = decorationItem.data;
        // Remove this in production 
        console.log(decorationItem);
      });
    }
  };
  

}
