import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Demo01Component } from './demo01/demo01.component';
import { Demo02Component } from './demo02/demo02.component';
import { Demo03Component } from './demo03/demo03.component';
import { Demo04Component } from './demo04/demo04.component';

const routes: Routes = [
  {
    path: 'demo01',
    component: Demo01Component,
    title: 'String Interpoliation',
  },
  {
    path: 'demo02',
    component: Demo02Component,
    title: 'Two-way Binding(ng-model)',
  },
  {
    path: 'demo03',
    component: Demo03Component,
    title: 'Event Binding',
  },
  {
    path: 'demo04',
    component: Demo04Component,
    title: 'Attribute Binding',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemosRoutingModule {}
