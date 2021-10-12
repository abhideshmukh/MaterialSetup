import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WrapperComponent } from './component/wrapper/wrapper.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
  declarations: [
    WrapperComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule
  ]
})
export class SharedModule { }
