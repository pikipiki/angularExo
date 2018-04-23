const wineFilter = {
  controller: 'wineFilterController',
  templateUrl: './components/wineFilter/wineFilter.html',
  bindings: {
    onOptionsSelected: "&",
  }
};

angular
  .module('components.wineFilter')
  .component('wineFilter', wineFilter);