import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutingModule } from './routing.module';
import { ComponentsModule } from '../components/components.module';

import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';

@NgModule({
  declarations: [HomeComponent,MoviesComponent],
  imports: [CommonModule, RoutingModule, ComponentsModule],
})
export class ViewsModule {}