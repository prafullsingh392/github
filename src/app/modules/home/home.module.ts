import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { MaterialeModule } from 'src/material.module';
import { CommanModuleModule } from 'src/app/comman-module/comman-module.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    MaterialeModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    HomeRoutingModule,
    CommanModuleModule
  ]
})
export class HomeModule { }
