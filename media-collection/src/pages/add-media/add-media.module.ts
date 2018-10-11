import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddMediaPage } from './add-media';

@NgModule({
  declarations: [
    AddMediaPage,
  ],
  imports: [
    IonicPageModule.forChild(AddMediaPage),
  ],
})
export class AddMediaPageModule {}
