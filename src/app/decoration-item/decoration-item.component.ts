import { Component, OnInit, Input } from '@angular/core';
import { DecorationItemService } from './decoration-item.service';
import {ActivatedRoute } from '@angular/router';


export type Decoration = {
  id : number;
  name : String;
  materials : String;
  directions : String;
  image: String;
 }


@Component({
  selector: 'app-decoration-item',
  templateUrl: './decoration-item.component.html',
  styleUrls: ['./decoration-item.component.css']
})
export class DecorationItemComponent implements OnInit {
  // This declares a property to store an individual decoration 
  decorationItem : any;


  // ActivatedRoute is a service that provides information about the currently activated route. Passing in ActivatedRoute as a parameter makes the URL routes available to the class. 
  constructor(private decorationItemService : DecorationItemService, private route: ActivatedRoute) {}

  
  /*
    This retrieves the ID from the URL route parameters using the "snapshot" of the ActivatedRoute service. It then checks if the ID is not empty. If it is not empty, it calls the "getDecorationById" method of the "decorationItemService" service, passing the ID as a parameter. This method returns an observable that emits the decoration item data. It then uses the "subscribe" method on the observable to handle the emitted decoration item data and stores it in the "decorationItem" property of the component.
   */
  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id') || '';
    
    if (id) {
    this.decorationItemService.getDecorationById(+id)
        .subscribe((decorationItem) => {
          this.decorationItem = decorationItem.data;
      });
    }
  };


}
