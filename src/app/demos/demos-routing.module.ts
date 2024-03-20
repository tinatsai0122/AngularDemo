import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Demo01Component } from './demo01/demo01.component';
import { Demo02Component } from './demo02/demo02.component';
import { Demo03Component } from './demo03/demo03.component';
import { Demo04Component } from './demo04/demo04.component';
import { Demo06Component } from './demo06/demo06.component';
import { Demo08Component } from './demo08/demo08.component';
import { Demo09Component } from './demo09/demo09.component';

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
  {
    path: 'demo06',
    component: Demo06Component,
    title: 'Les Pip',
  },
  {
    path: 'demo08',
    component: Demo08Component,
    title: 'Component Directives',
  },
  {
    path: 'demo09',
    component: Demo09Component,
    title: 'Structure Directives',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemosRoutingModule {}
