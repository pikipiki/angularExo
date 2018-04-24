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

    {{$ctrl.changes}}
  `,
  controller: class DisplayAnswerController {

    // on change, we do a deep copy of the country we retrieved via binding from 
    // container component

    $onInit() {
      console.log(2)
    }

    $onChanges(changes) {
      console.log(changes)
      if (changes.country) {
        this.country = angular.copy(this.country)
        console.log(this.country)
      }
    }
  }
};