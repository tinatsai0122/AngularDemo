import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemosRoutingModule } from './demos-routing.module';
import { Demo01Component } from './demo01/demo01.component';
import { Demo02Component } from './demo02/demo02.component';
import { Demo03Component } from './demo03/demo03.component';
import { Demo04Component } from './demo04/demo04.component';
import { Demo06Component } from './demo06/demo06.component';
import { FormsModule } from '@angular/forms';
import { Demo08Component } from './demo08/demo08.component';
import { Demo09Component } from './demo09/demo09.component';

@NgModule({
  declarations: [
    Demo01Component,
    Demo02Component,
    Demo03Component,
    Demo04Component,
    Demo06Component,
    Demo08Component,
    Demo09Component,
  ],
  imports: [CommonModule, DemosRoutingModule, FormsModule],
})
export class DemosModule {}
