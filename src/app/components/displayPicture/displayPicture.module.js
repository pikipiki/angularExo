import { DisplayPictureComponent } from './displayPicture.component';

export const DisplayPictureModule = angular
  .module(
    'displayPicture',
    []
  )
  .component(
    'displayPicture',
    DisplayPictureComponent
  )
  .name;