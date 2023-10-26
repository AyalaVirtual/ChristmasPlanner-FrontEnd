import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StockingStufferFormService } from './stocking-stuffer-form.service';
import { ActivatedRoute } from '@angular/router';
import { StockingStuffersService } from '../stocking-stuffers/stocking-stuffer.service';


export type StockingStuffer = {
  id: number;
  name : String;
  description : String;
  image: String;
 }


@Component({
  selector: 'app-stocking-stuffer-form',
  templateUrl: './stocking-stuffer-form.component.html',
  styleUrls: ['./stocking-stuffer-form.component.css']
})
export class StockingStufferFormComponent {
    // This declares a property to store a newly created stocking stuffer
    @Input() stockingStuffers : StockingStuffer[] = [];
    @Output() stockingStufferCreated: EventEmitter<StockingStuffer> = new EventEmitter<StockingStuffer>(); // Define an Output property
    stockingStuffer : any;
    isUpdate: boolean = false;
    
  
    constructor(private route : ActivatedRoute, private stockingStufferFormService : StockingStufferFormService, private stockingStuffersService : StockingStuffersService) {
        this.stockingStuffer = { name: '', description: '', image: '' };
    }
  
  
    // This method will be executed when the form is submitted
    onSubmit() {
      console.log('onSubmit called');
      console.log(this.stockingStuffer);
      // Retrieve form data from your form controls
      // This accesses the form data via component properties
        const stockingStufferData = {
          // This extracts the data from the form controls 
          name: this.stockingStuffer.name,
          description: this.stockingStuffer.description,
          image: this.stockingStuffer.image,
        };
  
        if (this.isUpdate) {
            // This calls the service method to make an API request to update an existing stocking stuffer
            this.stockingStufferFormService.updateStockingStuffer(this.stockingStuffer.id, stockingStufferData).subscribe((response) => {
              console.log('Stocking Stuffer updated:', response);
            });
  
        } else {
            // This calls the service method to make an API request to create a new stocking stuffer
            this.stockingStufferFormService.createStockingStuffer(stockingStufferData).subscribe((response) => {
              this.stockingStufferCreated.emit(response);
              this.stockingStuffersService.stockingStufferCreated();
        })
      }
    }
  
  
  }
    
