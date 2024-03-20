import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExosRoutingModule } from './exos-routing.module';
import { Exo01Component } from './exo01/exo01.component';
import { Exo02Component } from './exo02/exo02.component';
import { Exo03Component } from './exo03/exo03.component';
import { ExosComponent } from './exos.component';
import { Exo071Component } from './exo071/exo071.component';
import { SharedModule } from '../shared/shared.module';
import { Exo072Component } from './exo072/exo072.component';
import { Exo08Component } from './exo08/exo08.component';
import { Exo09Component } from './exo09/exo09.component';
@NgModule({
  declarations: [
    Exo01Component,
    Exo02Component,
    Exo03Component,
    ExosComponent,
    Exo071Component,
    Exo072Component,
    Exo08Component,
    Exo09Component,
  ],
  imports: [CommonModule, ExosRoutingModule, SharedModule],
})
export class ExosModule {}
