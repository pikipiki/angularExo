import wordsList from 'word-list-json';

export class DataService {
  constructor($http) {
    'ngInject';
    this.http = $http;
  }
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