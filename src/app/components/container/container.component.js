export const ContainerComponent = {
  template: `

    <search-letter
      on-search='$ctrl.checkResult($event)'>
    </search-letter>

    <display-answer
      country = '$ctrl.countrySplittedByLetter'>
    </display-answer>

    <display-picture>
    </display-picture>

  `,
  controller: class ContainerController {

    // inject DataService (to retreive list of countries)
    // inject UtilsFunc Service (common used functions)
    constructor(
        DataService,
        UtilsFunc
      ) {
      'ngInject';
      this.dataService = DataService
      this.utilsFunc = UtilsFunc;
    }

    // at initialization of the component, retrieve list of countries
    $onInit() {

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
                return this.utilsFunc.countryNameLengthEqualTo(6, country.name)
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
      this.searchedValue = object['value'];

    // we use immutable data, otherwise the $onchanges is not taken into account
    // yet, we need to keep track of last state

      this.countrySplittedByLetter = this.countrySplittedByLetter.map((letter) => {
        if (letter === this.searchedValue) {
          return ''
        } else {
          return letter
        }
      });

      console.log(this.newResult)

    }

  }

};