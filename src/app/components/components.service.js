export class DataService {
  constructor($http) {
    'ngInject';
    this.http = $http;
  }
  // get list of countries
  getCountries() {
    return this.http.get(
      'https://restcountries-v1.p.mashape.com/all'
    )
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
  }
};

export class UtilsFunc {
  //get random number
  getRandomInt(max) {
    return Math.floor(
      Math.random() * Math.floor(max)
    );
  }
  //checking if a name contains a space in it
  checkNoSpaceInName(name) {
    return name.indexOf(' ') === -1;
  }
  //check the length of a word
  countryNameLengthEqualTo(number, name) {
    return name.length === number;
  }
};