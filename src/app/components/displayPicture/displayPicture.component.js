export const DisplayPictureComponent = {
  bindings: {
    tries: '<',
    winner: '<'
  },
  template: `
  <div class='pt-2 pb-1'>
    <span>
      Number of tries remaining : {{ $ctrl.tries }}
    </span>

    <span 
      ng-if='$ctrl.tries === 0'
      class='display-block'>
      You lost !
    </span>

    <span 
      ng-if='$ctrl.winner === true'
      class='display-block'>
      You Win !
    </span>
  </div>
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