import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    MatIconModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
