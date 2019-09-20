import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DndModule } from 'ngx-drag-drop';
import { FormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';

@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    FormRoutingModule,
    NgMultiSelectDropDownModule.forRoot(),
    FormsModule,
    DndModule,

  ]
})
export class FormModule { }
