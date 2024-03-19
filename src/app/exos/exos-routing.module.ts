import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Exo01Component } from './exo01/exo01.component';
import { Exo02Component } from './exo02/exo02.component';
import { Exo03Component } from './exo03/exo03.component';
import { ExosComponent } from './exos.component';

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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExosRoutingModule {}
