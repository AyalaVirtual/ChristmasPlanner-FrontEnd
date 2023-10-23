import { Component, OnInit, Input } from '@angular/core';
import { Decoration } from '../decoration-page/decoration-page.component';
import { DecorationService } from './decoration.service';


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
        this.decorations = response;
        // Remove this in production 
        console.log(response);
      }
    )
  };

  // this.decorationService.getDecorationById().subscribe(
  //     (response : any) => {
  //       // This assigns the retrieved data to the component property 
  //       this.decoration = response;
  //       // Remove this in production 
  //       console.log(response);
  //     }
  //   )
  // };

}
