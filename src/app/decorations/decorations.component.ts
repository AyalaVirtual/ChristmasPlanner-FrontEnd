import { Component, OnInit, Input } from '@angular/core';
import { DecorationService } from './decoration.service';


export type Decoration = {
  id : number;
  name : String;
  materials : String;
  directions : String;
  image : String;
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


  // This method is called when the component is initialized. Within this method, the fetchDecorations() function is called to retrieve the decorations. 
  ngOnInit(): void {
    this.fetchDecorations();

   
  /* 
    In this method, the decorationCreated$ observable from the decoration service is subscribed to using the .subscribe() method, which means that whenever a decoration is created, the fetchDecorations() function will be called again to update the list of decorations.
  */
  this.decorationService.decorationCreated$.subscribe(() => {
      this.fetchDecorations();
    });
  }


  /* 
    This method fetches the decorations from the decoration service by calling the getAllDecorations() function from the decoration service.  This returns an observable that the .subscribe() method is used to subscribe to so that when a response is received, the decorations property of the component is assigned the data retrieved from the response. As a result, whenever a new decoration is created, the list of decorations is updated.
  */
  fetchDecorations(): void {
    this.decorationService.getAllDecorations().subscribe(
      (response : any) => {
        this.decorations = response.data;
      }
    )
  }


}
