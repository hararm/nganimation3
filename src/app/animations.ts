import {animate, state, style, transition, trigger} from "@angular/animations";

export const showStateTrigger = trigger('showState', [
  // transition('void => *', [
  //   style({
  //     opacity: 0
  //   }),
  //   animate(300, style({
  //     opacity: 1
  //   }))
  // ]),
  // transition('* => void', animate(300,style ({
  //   opacity: 0
  // })))
  transition(':enter', [
    style({
      opacity: 0
    }),
    animate(300, style({
      opacity: 1
    }))
  ]),
  transition(':leave', animate(300,style ({
    opacity: 0
  })))
]);

export const animateStateTrigger = trigger('animateState', [
  transition('*=>*', [
    animate(400, style({
      width: 0
    })),
    animate(400,style({
      width: '*'
    }))
  ])
]);
