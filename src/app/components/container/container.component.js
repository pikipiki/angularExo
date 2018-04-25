export const ContainerComponent = {
  template: `
  
  <div class='flowers'>

    <div 
      class='container'
      ng-class="{
        winner: $ctrl.checkIfWinner,
        loser: $ctrl.numberOfTries === 0
      }">

      <search-letter
        on-search='$ctrl.checkResult($event)'>
      </search-letter>

      <display-answer
        country = '$ctrl.countrySplittedByLetter'
        tries = '$ctrl.numberOfTries'>
      </display-answer>

      <display-picture
        tries = '$ctrl.numberOfTries'
        winner = '$ctrl.checkIfWinner'>
      </display-picture>

    </div>
    
  </div>

  `,
  controller: class ContainerController {

    // inject DataService (to retreive list of countries)
    // inject UtilsFunc Service (common used functions)
    constructor(
        DataService,
        UtilsFunc,
        AppConfig
      ) {
      'ngInject';
      this.dataService = DataService
      this.utilsFunc = UtilsFunc;
      this.appConfig = AppConfig;
    }

    // at initialization of the component, retrieve list of countries
    $onInit() {

      this.newObject = {};

      // number of tries before losing the game
      this.numberOfTries = this.appConfig['NUMBER_OF_TRIALS'];

      // filtering list of countries to only keep those with no space in their name
      // it would be hard to play hangman game with spaces

      // then we filter so all the countries has the same numbers of letters

      // finally we randomly pick one country from the list
      this.dataService.getCountries()
        .then((countries) => {
          this.countriesNoSpaceInItsName = countries
            .filter(
              (country) => {
                return this.utilsFunc.checkNoSpaceInName(country.name);
              }
            )
            .filter(
              (country) => {
                return this.utilsFunc.countryNameLengthEqualTo(this.appConfig['LENGTH_OF_THE_WORD'], country.name)
              }
            );

          // Select a random value from the list of countries filtered
          this.randomValue = this.utilsFunc.getRandomInt(
            this.countriesNoSpaceInItsName.length
          );

          // Pick a random country name and put it in lowercase
          this.randomCountry = this.countriesNoSpaceInItsName[this.randomValue].name.toLowerCase();

          // split each letter of the country name in an array
          // and we associate with each letter, the value false
          // every time one of the letter will be guessed, the value 
          // which switches to true

          this.countrySplittedByLetter = this.randomCountry
            .split('')
            .map((letter, index) => {
              return Object
                .assign(
                  {}, 
                  {
                    [letter]: false
                  } 
                );
            });

          // Display the right answer in the console
          // console.log(this.countrySplittedByLetter)

          this.newCountrySplittedByLetter = Array(this.appConfig['LENGTH_OF_THE_WORD']).fill(null)

        });

    }

    // retrieve the value typed on search bar 
    // if the value typed is present in the array, we replace it by an empty element
    // we pass this array to the displayAnswer Component

    checkResult(object) {

      // retrieve the value typed in the search bar
      this.searchedValue = object['value']

      //if number of tries superior to 0 and if the search bar is not empty , 
      //then you can play the games, otherwise you lose.

      if (this.numberOfTries !== 0 && this.searchedValue) {
        
        // convert search value to lowercae
        this.searchedValueToLowerCase = this.searchedValue.toLowerCase();

      // we use immutable data, otherwise the $onchanges is not taken into account
      // if the answer is the search bar is right, switch its associated value to 'true'

        this.countrySplittedByLetter = this.countrySplittedByLetter
          .map((obj) => {
            this.typedletter = Object.keys(obj)[0]
            if(this.searchedValueToLowerCase === this.typedletter) {
              return Object
                .assign(
                  {}, 
                  {
                    [this.typedletter]: true
                  } 
                );
            } else {
              return obj;            
            }
          })

        // the winning condition is that all guessed letters have the value 'true'

        this.checkIfWinner = this.countrySplittedByLetter
          .every((obj) => {
            this.key = obj[Object.keys(obj)]
            return this.key === true
          });

        // decrement tries after each click
        this.numberOfTries--

      } 

    }

  }

};