import { Component, Input } from '@angular/core';
import { Decoration } from '../decoration-page/decoration-page.component';


@Component({
  selector: 'app-decorations',
  templateUrl: './decorations.component.html',
  styleUrls: ['./decorations.component.css']
})
export class DecorationsComponent {
  @Input() public decorations : Decoration[] = [];
}
