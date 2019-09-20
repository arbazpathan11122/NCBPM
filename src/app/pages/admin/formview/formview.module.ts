import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormViewRoutingModule } from './formview-routing.module';
import { FormViewComponent } from './formview.component';
import { FormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@NgModule({
  declarations: [FormViewComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    FormViewRoutingModule
  ]
})
export class FormViewModule { }
