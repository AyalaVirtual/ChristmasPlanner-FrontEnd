import { Component, Input } from '@angular/core';
import { StockingStuffer } from '../stocking-stuffer-page/stocking-stuffer-page.component';


@Component({
  selector: 'app-stocking-stuffers',
  templateUrl: './stocking-stuffers.component.html',
  styleUrls: ['./stocking-stuffers.component.css']
})
export class StockingStuffersComponent {
  @Input() public stockingStuffers : StockingStuffer[] = [];
}
