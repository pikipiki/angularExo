export const SearchLetterComponent = {
  bindings: {
    country: '@',
    onSearch: '&'
  },
  template: `
    <label for="search">Type a letter</label>
    <input 
      type='text' 
      ng-model='$ctrl.value'
      id='#search'
      maxlength=1>
    <button
      ng-click='$ctrl.onSearch({
        $event: {
          value: $ctrl.value
        }
      })'>
      Guess
    </button>
  `,
  controller: class SearchLetterController{}
};