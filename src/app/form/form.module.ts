import { NgModule } from '@angular/core';
import { FormComponent } from './form.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    FormComponent
  ]
})
export class FormModule { }
