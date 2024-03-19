import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemosRoutingModule } from './demos-routing.module';
import { Demo01Component } from './demo01/demo01.component';
import { Demo02Component } from './demo02/demo02.component';
import { Demo03Component } from './demo03/demo03.component';
import { Demo04Component } from './demo04/demo04.component';
import { DemosComponent } from './demos.component';

@NgModule({
  declarations: [
    DemosComponent,
    Demo01Component,
    Demo02Component,
    Demo03Component,
    Demo04Component,
  ],
  imports: [CommonModule, DemosRoutingModule],
})
export class DemosModule {}
