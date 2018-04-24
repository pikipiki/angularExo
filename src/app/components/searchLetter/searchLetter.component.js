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
  <select
    ng-model='$ctrl.value'>
    <option 
      ng-repeat = 'letter in $ctrl.alphabet'
      value="{{ letter | lowercase }}"
      >
      {{ letter }}
    </option>
  </select>
    <button
      ng-click='$ctrl.onSearch({
        $event: {
          value: $ctrl.value
        }
      })'>
      Guess
    </button>
  `,

  // we use this alphabet array to repeat it on the 'select'
  controller: class SearchLetterController {
    $onInit() {
      this.alphabet = [
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z'
      ]
    };
  }
};