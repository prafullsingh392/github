import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GithubapisService } from './services/githubapis.service';
import { MaterialeModule } from 'src/material.module';
import { CommanModuleModule } from './comman-module/comman-module.module';
import { StoreModule } from '@ngrx/store';
import {reducers} from './store/app.reducer'
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    BrowserAnimationsModule,
    MaterialeModule,
    CommanModuleModule
  ],
  providers: [GithubapisService],
  bootstrap: [AppComponent]
})
export class AppModule { }
