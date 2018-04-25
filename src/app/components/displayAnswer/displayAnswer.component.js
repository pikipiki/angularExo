// we add 'track by $index' because if a letter appears twice in a word like : Russia,
// AngularJS considers as a duplication and prefer the word to appear
// so we track by id 

export const DisplayAnswerComponent = {
  bindings: {
    country: '<',
    tries: '<'
  },
  template: `
    <div 
      class='result text-center flex-row'
      ng-hide='$ctrl.tries === 10'>
      <div 
        ng-repeat='letter in $ctrl.country track by $index'
        class="letter-of-a-word border">

        <span>
          {{letter}}
        <span>

      </div>
    </div>
  `,
  controller: class DisplayAnswerController {

    // on change, we do a deep copy of the 'country' and 'tries' we retrieved via binding from 
    // container component

    $onChanges(changes) {
      if (changes.country) {
        this.country = angular.copy(this.country);
      }
      if (changes.tries) {
        this.tries = angular.copy(this.tries);
      }

      // we convert the array-objects into a simple array 
      // in this array: 
      // - any letters with true value, will be displayed
      // - any letters with false value, will be empty, thus with empty value 

      if (this.country) {
        this.country = this.country
          .map((obj) => {
            this.typedletter = Object.keys(obj)[0]
            if (obj[this.typedletter] === true) {
              return this.typedletter;
            } else {
              return '';
            }
          });
      }

    }
  }
};