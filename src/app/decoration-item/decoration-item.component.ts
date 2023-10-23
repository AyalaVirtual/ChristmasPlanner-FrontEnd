import { Component, OnInit, Input } from '@angular/core';
import { DecorationItemService } from './decoration-item.service';


export type Decoration = {
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
  decoration : any;


  constructor(private decorationItemService : DecorationItemService) {}


  ngOnInit(): void {
    this.decorationItemService.getDecorationById(decorationId).subscribe(
      (response : any) => {
        // This assigns the retrieved data to the component property 
        this.decoration = response.data;
        // Remove this in production 
        console.log(response.data);
      }
    )
  };

}
