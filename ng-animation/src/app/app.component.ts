import {Component} from '@angular/core';
import {animate, group, keyframes, query, state, style, transition, trigger} from "@angular/animations";

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
      })),
      state('special', style({
        background: 'orange',
        transform: 'scale(0.5)',
        borderRadius: '50%'
      })),
      transition('start => end', animate(450)),
      transition('end => start', animate('800ms ease-in-out')),
      // transition('special <=> *', animate(500)) // * - какое-либо состояние
      transition('special <=> *', [
        group([
          query('h4', animate(1500, style({
            fontSize: '.5rem',
            color: 'red'
          }))),
          style({background: 'green'}),
          animate('1s', style({
            background: 'pink'
          })), animate(750)
        ]),
      ]),
      transition('void => *', [ // void - зарезервированное слово для появление элемента в DOM
        // style({opacity: 0}), animate('850ms ease-out'),
        animate('4s', keyframes([
          style({background: 'red', offset: 0}), // этап на котором срабатывает анимация
          style({background: 'black', offset: 0.2}),
          style({background: 'orange', offset: 0.3}),
          style({background: 'blue', offset: 1}),
        ])),
      ]),
      // void => * === :enter; * => void === :leave
      transition(':leave', [

        style({opacity: 1}),
        group([
          animate(750, style({
            opacity: 0,
            transform: 'scale 1.2'
          })),
          animate(300, style({
            color: '#000',
            fontWeight: 'bold'
          }))
        ])
      ])
    ])
  ]
})
export class AppComponent {
  boxState = 'start'
  visible = true

  animate() {
    this.boxState = this.boxState === 'end' ? 'start' : 'end';
  }

  animateStart(event: AnimationEvent) {
    console.log('start: ', event);
  }

  animateDone(event: AnimationEvent) {
  console.log('done', event);
  }
}
