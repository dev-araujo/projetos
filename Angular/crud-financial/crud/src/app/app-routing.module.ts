import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DetailsComponent } from './pages/details/details.component';
import { NewComponent } from './pages/new/new.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'details', component: DetailsComponent },
  { path: 'new', component: NewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
