import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, title: 'Home' },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // {
  //   path: 'demos',
  //   children: [
  //     { path: '', component: DemosComponent },
  //     {
  //       path: 'demo01',
  //       component: Demo01Component,
  //       title: 'String Interpoliation',
  //     },
  //     {
  //       path: 'demo02',
  //       component: Demo02Component,
  //       title: 'Two-way Binding(ng-model)',
  //     },
  //     { path: 'demo03', component: Demo03Component, title: 'Event Binding' },
  //     {
  //       path: 'demo04',
  //       component: Demo04Component,
  //       title: 'Attribute Binding',
  //     },
  //   ],
  // },

  //lazy loading
  {
    path: 'demos',
    title: 'Demos',
    loadChildren: () =>
      import('./demos/demos.module').then((module) => module.DemosModule),
  },
  {
    path: 'exos',
    title: 'Exos',
    loadChildren: () =>
      import('./exos/exos.module').then((module) => module.ExosModule),
  },
  {
    path: 'admin',
    title: 'Admin',
    loadChildren: () =>
      import('./lazyloading/lazyloading.module').then(
        (module) => module.LazyloadingModule
      ),
  }, //lazy loading

  { path: '**', component: NotFoundComponent, title: 'Not Found' }, //** means everything except what has been defined above/
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
