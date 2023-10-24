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
    this.fetchDecorations();

    this.decorationService.decorationCreated$.subscribe(() => {
      this.fetchDecorations();
    });
  }

  fetchDecorations(): void {
    this.decorationService.getAllDecorations().subscribe(
      (response : any) => {
        this.decorations = response.data;
      }
    )
  }


}
