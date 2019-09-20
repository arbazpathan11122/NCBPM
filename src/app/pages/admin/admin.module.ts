import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ComponentsModule } from '../components/components.module';
import { DndModule } from 'ngx-drag-drop';

@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    AdminRoutingModule,
    DndModule,

  ]
})
export class AdminModule { }
