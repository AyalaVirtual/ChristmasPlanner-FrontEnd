import { Component, OnInit, Input } from '@angular/core';
import { DecorationService } from './decoration.service';


export type Decoration = {
  id : number;
  name : String;
  materials : String;
  directions : String;
 }


@Component({
  selector: 'app-decorations',
  templateUrl: './decorations.component.html',
  styleUrls: ['./decorations.component.css']
})
export class DecorationsComponent implements OnInit {
  // This declares a property to store decorations 
  decorations : any[] = [];
  



  constructor(private decorationService : DecorationService) {}


  ngOnInit(): void {
    this.decorationService.getAllDecorations().subscribe(
      (response : any) => {
        // This assigns the retrieved data to the component property 
        this.decorations = response.data;
        // Remove this in production 
        console.log(response.data);
        // This is how to access an individual decoration and its attributes 
        console.log(response.data[0]);
        console.log(response.data[0].id);
        
      }
    )
  };


}
