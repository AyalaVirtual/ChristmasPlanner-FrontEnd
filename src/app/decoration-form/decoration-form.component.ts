import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DecorationFormService } from './decoration-form.service';
import { ActivatedRoute } from '@angular/router';


export type Decoration = {
  id: number;
  name : String;
  materials : String;
  directions : String;
 }


@Component({
  selector: 'app-decoration-form',
  templateUrl: './decoration-form.component.html',
  styleUrls: ['./decoration-form.component.css']
})
export class DecorationFormComponent /* implements OnInit */ {
  // This declares a property to store a newly created decoration 
  @Input() decorations : Decoration[] = [];
  @Output() decorationCreated: EventEmitter<Decoration> = new EventEmitter<Decoration>(); // Define an Output property
  decoration : any;
  isUpdate: boolean = false;
  

  constructor(private route : ActivatedRoute, private decorationFormService : DecorationFormService) {
      // this.id = +this.route.snapshot.paramMap.get('id') || 0;
      // this.isUpdate = this.id !== 0;
  }


  // ngOnInit() {
  //   this.route.paramMap.subscribe((params) => {
  //     const id = params.get('id');

  //     // This says that if there's an 'id', then it's an update operation
  //     if (id) {
  //       this.id = id ? +id : undefined;
  //       this.isUpdate = true;
  //     }
  //   })
  // }


  // Method to handle both create and update
  saveDecoration(decorationData: any) {

    // if (this.isUpdate) {
    //   // Update an existing decoration
    //   this.decorationFormService.updateDecoration(this.decoration.id, decorationData).subscribe((response) => {
    //     console.log('Decoration updated:', response);
    //   });

    // } else {

      // Create a new decoration
      this.decorationFormService.createDecoration(decorationData).subscribe((response) => {
        console.log('Decoration created:', response);
      });
    // }
  }


  // This method will be executed when the form is submitted
  onSubmit() {

    // Retrieve form data from your form controls
    // This accesses the form data via component properties
      const decorationData = {
        // This extracts the data from the form controls 
        name: this.decoration.name,
        materials: this.decoration.materials,
        directions: this.decoration.directions
      };

      if (this.isUpdate) {
          // This calls the service method to make an API request to update an existing decoration
          this.decorationFormService.updateDecoration(this.decoration.id, decorationData).subscribe((response) => {
            console.log('Decoration updated:', response);
          });

      } else {
          // This calls the service method to make an API request to create a new decoration
          this.decorationFormService.createDecoration(decorationData).subscribe((response) => {
            console.log('Decoration created:', response);
      })
    }
  }


  // createDecoration(decoration : any) {
  //   this.decorationFormService.createDecoration(decoration).subscribe(
  //     (response : any) => {
  //       // This assigns the retrieved data to the component property 
  //       this.decoration = response.data;
  //       // Remove this in production 
  //       console.log('Decoration created:', response);
  //       console.log(response.data);
  //     }
  //   )
  // };


  // updateDecoration(id : number, updatedDecoration: any) {
  //   this.decorationFormService.updateDecoration(this.id, updatedDecoration).subscribe((response) => {
  //     console.log('Decoration updated:', response);
  //   });
  // }


}
