import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './page/contact.component';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { MatIconModule } from "@angular/material/icon";


@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    SharedComponentsModule,
    MatIconModule
  ]
})
export class ContactModule { }
