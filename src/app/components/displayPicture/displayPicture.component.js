export const DisplayPictureComponent = {
  bindings: {
    tries: '<',
    winner: '<'
  },
  template: `

    <span>
      Number of tries remaining : {{ $ctrl.tries }}
    </span>

    <span ng-if="$ctrl.tries === 0">
      You lost !
    </span>

    <span ng-if="$ctrl.winner === true">
      You Win !
    </span>
  `,
  controller: class DisplayPictureController {

    // on change, we do a deep copy of the 'tries' and 'winner' we retrieved via binding from 
    // container component

    $onChanges(changes) {
      if (changes.tries) {
        this.tries = angular.copy(this.tries)
      }
      if (changes.winner) {
        this.winner = angular.copy(this.winner)
      }
    }
  }
};