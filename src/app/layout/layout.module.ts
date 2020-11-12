import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayout } from './main/main.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [MainLayout],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    MainLayout
  ]
})
export class LayoutModule { }
