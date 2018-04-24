export const ContainerComponent = {
  template: `

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

          this.countrySplittedByLetter = this.randomCountry.split('')

        });

    }

    // retrieve the value typed on search bar 
    // if the value typed is present in the array, we replace it by an empty element
    // we pass this array to the displayAnswer Component

    checkResult(object) {
      //if number of tries superior to 0 , then you can play the games, otherwise you lose.
      if(this.numberOfTries !== 0) {
        
        this.searchedValue = object['value'];

      // we use immutable data, otherwise the $onchanges is not taken into account
      // yet, we need to keep track of last state

        this.countrySplittedByLetter = this.countrySplittedByLetter
          .map((letter) => {
            return letter === this.searchedValue ? '': letter;
          });

        this.checkIfWinner = this.countrySplittedByLetter
          .every((letter) => {
            return letter === ''
          });

        // decrement tries after each click
        this.numberOfTries--

      } 

    }

  }

};