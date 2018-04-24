import { SearchLetterComponent } from './searchLetter.component';
import './searchLetter.scss';

export const SearchLetterModule = angular
  .module(
    'searchLetter', 
    []
  )
  .component(
    'searchLetter',
    SearchLetterComponent
  )
  .name;