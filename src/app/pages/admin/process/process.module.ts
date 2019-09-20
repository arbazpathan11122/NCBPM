import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcessRoutingModule } from './process-routing.module';
import { ProcessComponent } from './process.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DndModule } from 'ngx-drag-drop';

@NgModule({
  declarations: [ProcessComponent],
  imports: [
    CommonModule,
    ProcessRoutingModule,
    FormsModule,
    RouterModule,
    DndModule,

  ],
})
export class ProcessModule { }
