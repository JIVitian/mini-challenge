import { NgModule } from '@angular/core';
import { FormComponent } from './form.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    FormComponent
  ]
})
export class FormModule { }
