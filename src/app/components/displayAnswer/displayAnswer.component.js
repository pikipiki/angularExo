// we add 'track by $index' because if a letter appears twice in a word like : Russia,
// AngularJS considers as a duplication and prefer the word to appear
// so we track by id 

export const DisplayAnswerComponent = {
  bindings: {
    country: '<'
  },
  template: `

    <div class='result text-center flex-row'>
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

    $onInit() {
      this.country = '';
    }

    // on change, we do a deep copy of the country we retrieved via binding from 
    // container component

    $onChanges(changes) {
      if (changes.country) {
        this.country = angular.copy(this.country);
      }
    }
  }
};