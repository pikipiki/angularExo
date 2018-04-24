import { DisplayAnswerComponent } from './displayAnswer.component';
import './displayAnswer.scss';

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