import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutingModule } from './routing.module';
import { ComponentsModule } from '../components/components.module';

import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, RoutingModule, ComponentsModule],
})
export class PagesModule {}
