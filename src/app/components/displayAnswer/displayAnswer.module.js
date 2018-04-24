import { DisplayAnswerComponent } from './displayAnswer.component';

export displayModule = angular
  .module(
    'displayAnswer',
    []
  )
  .component(
    'displayComponent',
    DisplayAnswerComponent
  )
  .name;