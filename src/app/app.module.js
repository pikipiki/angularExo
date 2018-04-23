import angular              from 'angular';
import { AppComponent }     from './app.component';
import { ComponentsModule } from './components/components.module';

// Root component

export const AppModule = angular
  .module('app', [
    ComponentsModule
  ])
  .component(
    'app', 
    AppComponent
  )
  .run(($http) => {
    'ngInject';
    $http.defaults.headers.common['X-Mashape-Key'] = 'l5eMXwY6d3mshmvnljsx6GVH9YWxp1IsKhsjsnSAZ5yXpYiGRl'
  })
  .name;