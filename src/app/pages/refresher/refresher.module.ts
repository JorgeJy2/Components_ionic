import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RefresherPage } from './refresher.page';

const routes: Routes = [
  {
    path: '',
    component: RefresherPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,ComponentsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RefresherPage]
})
export class RefresherPageModule {}
