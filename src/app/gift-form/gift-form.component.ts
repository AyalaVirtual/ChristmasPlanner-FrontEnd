import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GiftFormService } from './gift-form.service';
import { ActivatedRoute } from '@angular/router';
import { GiftService } from '../gifts/gift.service';


export type Gift = {
  id: number;
  name : String;
  description : String;
 }


@Component({
  selector: 'app-gift-form',
  templateUrl: './gift-form.component.html',
  styleUrls: ['./gift-form.component.css']
})
export class GiftFormComponent {
  // This declares a property to store a newly created gift
  @Input() gifts : Gift[] = [];
  @Output() giftCreated: EventEmitter<Gift> = new EventEmitter<Gift>(); // Define an Output property
  gift : any;
  isUpdate: boolean = false;
  

  constructor(private route : ActivatedRoute, private giftFormService : GiftFormService, private giftService : GiftService) {
      this.gift = { name: '', description: '' };
  }


  // This method will be executed when the form is submitted
  onSubmit() {
    console.log('onSubmit called');
    console.log(this.gift);
    // Retrieve form data from your form controls
    // This accesses the form data via component properties
      const giftData = {
        // This extracts the data from the form controls 
        name: this.gift.name,
        description: this.gift.description
      };

      if (this.isUpdate) {
          // This calls the service method to make an API request to update an existing gift
          this.giftFormService.updateGift(this.gift.id, giftData).subscribe((response) => {
            console.log('Gift updated:', response);
          });

      } else {
          // This calls the service method to make an API request to create a new gift
          this.giftFormService.createGift(giftData).subscribe((response) => {
            this.giftCreated.emit(response);
            this.giftService.giftCreated();
      })
    }
  }


}

