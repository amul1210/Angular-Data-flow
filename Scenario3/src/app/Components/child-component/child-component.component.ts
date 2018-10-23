import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent {

  constructor() { }

  @Input() greetMessage : string;
}
