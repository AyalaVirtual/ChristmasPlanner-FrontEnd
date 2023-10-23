import { Component, OnInit } from '@angular/core';
import { DecorationService } from '../decorations/decoration.service';


export type Decoration = {
  name : String;
  materials : String;
  directions : String;
 }

@Component({
  selector: 'app-decoration-page',
  templateUrl: './decoration-page.component.html',
  styleUrls: ['./decoration-page.component.css']
})
export class DecorationPageComponent implements OnInit {
  public decorations : Decoration[] = [];

  constructor(private decorationService : DecorationService) {}

  ngOnInit() : void {
    this.decorationService.getAllDecorations().subscribe(
      ( data : any) => {
        this.decorations = data; // Assign the retrieved data to the component property
        console.log(data);
      }
    );
  }

}

