import {state, style, trigger} from "@angular/animations";

export const showStateTrigger = trigger('showState',[
  state('notShown',style ({

  })),
  state('shown', style({

  }))
]);
