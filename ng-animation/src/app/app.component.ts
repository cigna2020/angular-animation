import { Component } from '@angular/core';
import {state, style, trigger} from "@angular/animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('boxAnim', [
      state('start', style({background: 'blue'})),
      state('end', style({
        backgroundColor: 'red',
        transform: 'scale(1.2)',
        transition: 'all, 1s'
      }))
    ])
  ]
})
export class AppComponent {
  boxState = 'start'

  animate() {
    this.boxState = this.boxState === 'end' ? 'start' : 'end';
  }
}
