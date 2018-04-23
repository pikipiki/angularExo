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
    constructor(DataService) {
      'ngInject';
      this.dataService = DataService;
    }
    $onInit() {
      this.dataService.getCountries()
        .then((countries) => {
          this.countries = countries;
        });
    }
  }
};