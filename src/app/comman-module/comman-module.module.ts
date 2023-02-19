import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadersComponent } from './components/headers/headers.component';
import { MaterialeModule } from 'src/material.module';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { UserCardComponent } from './components/user-card/user-card.component';



@NgModule({
  declarations: [
    HeadersComponent,
    SearchResultComponent,
    UserCardComponent
  ],
  imports: [
    CommonModule,
    MaterialeModule
  ],
  exports:[
    HeadersComponent,
    SearchResultComponent,
    UserCardComponent
  ]
})
export class CommanModuleModule { }
