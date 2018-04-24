import { DisplayAnswerComponent } from './displayAnswer.component';
import './DisplayAnswer.scss';

export const DisplayAnswerModule = angular
  .module(
    'displayAnswer',
    []
  )
  .component(
    'displayAnswer',
    DisplayAnswerComponent
  )
  .name;