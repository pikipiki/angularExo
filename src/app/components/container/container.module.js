import { ContainerComponent } from './container.component';
import { DataService } from '../components.service';
 
export const ContainerModule = angular
  .module(
    'container', 
    []
  )
  .component(
    'container',
    ContainerComponent 
  )
  .service(
    'DataService',
    DataService
  )
  .name;