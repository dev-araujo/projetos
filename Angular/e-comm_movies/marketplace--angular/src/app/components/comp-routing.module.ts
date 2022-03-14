import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//
import { HomeComponent } from '../views/home/home.component';
import { MoviesComponent } from '../views/movies/movies.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'movies',
    component: MoviesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompRoutingModule {}
