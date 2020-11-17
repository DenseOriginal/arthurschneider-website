import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayout } from './main/main.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { CustomIconsModule } from '../shared/custom-icons/custom-icons.module';
import { LayoutModule as MatLayoutModule } from "@angular/cdk/layout";
import { MatSidenavModule } from "@angular/material/sidenav";



@NgModule({
  declarations: [MainLayout],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    CustomIconsModule,
    MatLayoutModule,
    MatSidenavModule
  ],
  exports: [
    MainLayout
  ]
})
export class LayoutModule { }
