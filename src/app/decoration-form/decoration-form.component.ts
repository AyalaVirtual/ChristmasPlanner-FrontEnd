import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DecorationFormService } from './decoration-form.service';
import { ActivatedRoute } from '@angular/router';
import { DecorationService } from '../decorations/decoration.service';


export type Decoration = {
  id: number;
  name : String;
  materials : String;
  directions : String;
  image: String;
 }


@Component({
  selector: 'app-decoration-form',
  templateUrl: './decoration-form.component.html',
  styleUrls: ['./decoration-form.component.css']
})
export class DecorationFormComponent {
  // This declares a property to store a newly created decoration 
  @Input() decorations : Decoration[] = [];
  @Output() decorationCreated: EventEmitter<Decoration> = new EventEmitter<Decoration>(); // Define an Output property
  decoration : any;
  isUpdate: boolean = false;
  

  constructor(private route : ActivatedRoute, private decorationFormService : DecorationFormService, private decorationService : DecorationService) {
      this.decoration = { name: '', materials: '', directions: '', image: '' };
  }


  // This method will be executed when the form is submitted
  onSubmit() {
    console.log('onSubmit called');
    console.log(this.decoration);
    // Retrieve form data from your form controls
    // This accesses the form data via component properties
      const decorationData = {
        // This extracts the data from the form controls 
        name: this.decoration.name,
        materials: this.decoration.materials,
        directions: this.decoration.directions,
        image: this.decoration.image
      };

      if (this.isUpdate) {
          // This calls the service method to make an API request to update an existing decoration
          this.decorationFormService.updateDecoration(this.decoration.id, decorationData).subscribe((response) => {
            console.log('Decoration updated:', response);
          });

      } else {
          // This calls the service method to make an API request to create a new decoration
          this.decorationFormService.createDecoration(decorationData).subscribe((response) => {
            this.decorationCreated.emit(response);
            this.decorationService.decorationCreated();
      })
    }
  }


}
