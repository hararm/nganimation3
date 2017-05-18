import { Component } from '@angular/core';
import {animateStateTrigger, showStateTrigger} from "./animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [showStateTrigger, animateStateTrigger]
})
export class AppComponent {
  isShown = false;
  width = 400;
  animate = false;
  testResults = [];

  onToggleButtonClick() {
    this.isShown = !this.isShown;
    console.log('isShown= ', this.isShown);
  }

  onAddElement() {
    this.testResults.push(Math.random());
  }
}
