import { SearchLetterComponent } from './searchLetter.component';

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