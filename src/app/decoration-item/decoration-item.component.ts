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


  constructor(private decorationItemService : DecorationItemService, private route: ActivatedRoute) {}

  
  ngOnInit() {
    let decorationId = +this.route.snapshot.paramMap.get('decorationId') || '';

    this.decorationItemService.getDecorationById(decorationId).subscribe(
      (decorationItem) => {
        // This assigns the retrieved data to the component property 
        this.decorationItem = decorationItem;
        // Remove this in production 
        console.log(decorationItem);
      }
    )
  };
  

}
