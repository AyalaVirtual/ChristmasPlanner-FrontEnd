import { Component, OnInit, Input } from '@angular/core';
import { DecorationFormService } from './decoration-form.service';


export type Decoration = {
  name : String;
  materials : String;
  directions : String;
 }


@Component({
  selector: 'app-decoration-form',
  templateUrl: './decoration-form.component.html',
  styleUrls: ['./decoration-form.component.css']
})
export class DecorationFormComponent implements OnInit {
  // This declares a property to store a newly created decoration 
  newDecoration : any;
  

  constructor(private decorationFormService : DecorationFormService) {}


  ngOnInit(): void {
    this.decorationFormService.createDecoration(newDecoration).subscribe(
      (response : any) => {
        // This assigns the retrieved data to the component property 
        this.decoration = response.data;
        // Remove this in production 
        console.log(response.data);
      }
    )
  };

}
