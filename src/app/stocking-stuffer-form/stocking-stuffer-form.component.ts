import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StockingStufferFormService } from './stocking-stuffer-form.service';
import { ActivatedRoute } from '@angular/router';
import { StockingStuffersService } from '../stocking-stuffers/stocking-stuffer.service';


export type StockingStuffer = {
  id: number;
  name : String;
  description : String;
 }


@Component({
  selector: 'app-stocking-stuffer-form',
  templateUrl: './stocking-stuffer-form.component.html',
  styleUrls: ['./stocking-stuffer-form.component.css']
})
export class StockingStufferFormComponent {

}
