import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryRoutingModule } from './history-routing.module';
import { HistoryComponent } from './history/history.component';
import { CommanModuleModule } from 'src/app/comman-module/comman-module.module';


@NgModule({
  declarations: [
    HistoryComponent
  ],
  imports: [
    CommonModule,
    HistoryRoutingModule,
    CommanModuleModule
  ]
})
export class HistoryModule { }
