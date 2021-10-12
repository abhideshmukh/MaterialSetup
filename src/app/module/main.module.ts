import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { Page1Component } from './component/page1/page1.component';
import { Page2Component } from './component/page2/page2.component';
import { Page3Component } from './component/page3/page3.component';
import { LoginComponent } from './component/login/login.component';



@NgModule({
  declarations: [
    Page1Component,
    Page2Component,
    Page3Component,
    LoginComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
