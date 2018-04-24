import { ContainerModule }     from './container/container.module';
import { DisplayAnswerModule } from './displayAnswer/displayAnswer.module';
import { SearchLetterModule }  from './searchLetter/searchLetter.module';

//init component

export const ComponentsModule = angular
  .module(
    'components',
    [
      ContainerModule,
      DisplayAnswerModule,
      SearchLetterModule
    ]
  )
  .name;