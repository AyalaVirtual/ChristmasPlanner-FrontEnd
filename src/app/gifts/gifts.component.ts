import { Component, Input } from '@angular/core';
import { Gift } from '../gift-page/gift-page.component';


@Component({
  selector: 'app-gifts',
  templateUrl: './gifts.component.html',
  styleUrls: ['./gifts.component.css']
})
export class GiftsComponent {
  @Input() public gifts : Gift[] = [];

}
