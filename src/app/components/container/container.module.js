import { ContainerComponent } from './container.component';
import { DataService }        from '../components.service';
import { UtilsFunc }          from '../components.service';
import './container.scss';
 
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
  .service(
    'UtilsFunc',
    UtilsFunc
  )
  .name;