import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Exo01Component } from './exo01/exo01.component';
import { Exo02Component } from './exo02/exo02.component';
import { Exo03Component } from './exo03/exo03.component';
import { ExosComponent } from './exos.component';
import { Exo071Component } from './exo071/exo071.component';
import { Exo072Component } from './exo072/exo072.component';
import { Exo08Component } from './exo08/exo08.component';
import { Exo09Component } from './exo09/exo09.component';

const routes: Routes = [
  {
    path: '',
    component: ExosComponent,
  },
  {
    path: 'exo01',
    component: Exo01Component,
    title: 'Personal Profile',
  },
  {
    path: 'exo02',
    component: Exo02Component,
    title: 'Timer',
  },
  {
    path: 'exo03',
    component: Exo03Component,
    title: 'Toggle Password',
  },
  {
    path: 'exo071',
    component: Exo071Component,
    title: 'Custom Pipe Timer',
  },
  {
    path: 'exo072',
    component: Exo072Component,
    title: 'Custom Pipe Celsius<->Fahrenheit',
  },
  {
    path: 'exo08',
    component: Exo08Component,
    title: 'Component Directives',
  },
  {
    path: 'exo09',
    component: Exo09Component,
    title: 'Mixed Exercice',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExosRoutingModule {}
