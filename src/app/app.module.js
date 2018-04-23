import angular              from 'angular';
import { AppComponent }     from './app.component';
import { ModuleComponents } from './components/components.module';

// Root component

export const AppModule = angular
  .module('app', [
    ModuleComponents
  ])
  .component(
    'app', 
    AppComponent
  )
  .name;