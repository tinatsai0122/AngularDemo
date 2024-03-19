import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExosRoutingModule } from './exos-routing.module';
import { Exo01Component } from './exo01/exo01.component';
import { Exo02Component } from './exo02/exo02.component';
import { Exo03Component } from './exo03/exo03.component';
import { ExosComponent } from './exos.component';

@NgModule({
  declarations: [Exo01Component, Exo02Component, Exo03Component, ExosComponent],
  imports: [CommonModule, ExosRoutingModule],
})
export class ExosModule {}
