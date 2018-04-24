export const ContainerComponent = {
  template: `

    <searchLetter>
    </searchLetter>

    <displayAnswer>
    </displayAnswer>

    <displayPicture>
    </displayPicture>

  `,
  controller: class ContainerController {

    // inject DataService
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

          // Pick a random country name
          this.randomCountry = this.countriesNoSpaceInItsName[this.randomValue].name;
          console.log(this.randomCountry);

        });

    }

  }

};