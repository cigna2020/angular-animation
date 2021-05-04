import { Component, OnInit } from '@angular/core';
import {transition, trigger, useAnimation} from "@angular/animations";
import {bounce} from "ng-animate";

@Component({
  selector: 'app-animate',
  template: `
    <div class="rect" [@bounce]></div>
  `,
  styleUrls: ['./animate.component.scss'],
  animations: [
    trigger('bounce', [transition('* => *', useAnimation(bounce))])
  ]
})
export class AnimateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
