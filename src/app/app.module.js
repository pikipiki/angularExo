import angular              from 'angular';
import { AppComponent }     from './app.component';
import { ComponentsModule } from './components/components.module';
import { AppConfig }        from './app.constant';


// Root component

export const AppModule = angular
  .module('app', 
    [
      ComponentsModule,
    ]
  )
  .component(
    'app', 
    AppComponent
  )
  // settings key for retrieving countries via API REST
  .run(($http) => {
    'ngInject';
    $http.defaults.headers.common['X-Mashape-Key'] = 'l5eMXwY6d3mshmvnljsx6GVH9YWxp1IsKhsjsnSAZ5yXpYiGRl'
  })
  .constant(
    'AppConfig', 
    AppConfig 
  )
  .name;