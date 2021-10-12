import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import { WrapperComponent } from './shared/component/wrapper/wrapper.component';

const routes: Routes = [
  { path: '', component: WrapperComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    MatIconModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
