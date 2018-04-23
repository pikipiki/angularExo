import { ContainerComponent } from './container.component';
 
export const ContainerModule = angular
  .module(
    'container', 
    []
  )
  .component(
    'container',
    ContainerComponent 
  )
  .name;