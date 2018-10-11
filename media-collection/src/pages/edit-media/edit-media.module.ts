import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditMediaPage } from './edit-media';

@NgModule({
  declarations: [
    EditMediaPage,
  ],
  imports: [
    IonicPageModule.forChild(EditMediaPage),
  ],
})
export class EditMediaPageModule {}
