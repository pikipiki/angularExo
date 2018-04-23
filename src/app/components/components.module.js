import { ContainerModule } from './container/container.module';

//init component

export const ComponentsModule = angular
  .module(
    'components',
    [
      ContainerModule
    ]
  )
  .name;