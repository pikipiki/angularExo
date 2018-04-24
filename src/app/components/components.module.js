import { ContainerModule } from './container/container.module';
import { DisplayAnswerModule } from './displayAnswer/displayAnswer.module';

//init component

export const ComponentsModule = angular
  .module(
    'components',
    [
      ContainerModule,
      DisplayAnswerModule
    ]
  )
  .name;