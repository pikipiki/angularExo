import { ContainerModule }      from './container/container.module';
import { DisplayAnswerModule }  from './displayAnswer/displayAnswer.module';
import { DisplayPictureModule } from './displayPicture/displayPicture.module';
import { SearchLetterModule }   from './searchLetter/searchLetter.module';

//init component

export const ComponentsModule = angular
  .module(
    'components',
    [
      ContainerModule,
      DisplayAnswerModule,
      DisplayPictureModule,
      SearchLetterModule,
    ]
  )
  .name;