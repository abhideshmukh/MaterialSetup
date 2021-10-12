import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from '../app-routing.module';
import { MainModule } from '../module/main.module';
import { MainRoutingModule } from '../module/main-routing.module';

@NgModule({
  declarations: [],
  imports: [
    MainRoutingModule,
    AppRoutingModule,
    CommonModule,
    MainModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule
  ]
})
export class SharedModule { }
