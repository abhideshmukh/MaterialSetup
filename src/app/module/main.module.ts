import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { Page1Component } from './component/page1/page1.component';



@NgModule({
  declarations: [
    Page1Component
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
