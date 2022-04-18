import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './pages/home/home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContainerComponent } from './layout/container/container.component';
import { HeaderComponent } from './components/left-sidebar/header/header.component';
import { MenuComponent } from './components/left-sidebar/menu/menu.component';
import { AbstractComponent } from './components/right-sidebar/abstract/abstract.component';
import { CardsComponent } from './components/right-sidebar/cards/cards.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DetailsComponent } from './pages/details/details.component';
import { CardDashboardComponent } from './components/card-dashboard/card-dashboard.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ChartsComponent } from './components/chart/chart.component';
import { NewComponent } from './pages/new/new.component';
import { FormsComponent } from './components/forms/forms.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HomeComponent,
    SidebarComponent,
    ContainerComponent,
    HeaderComponent,
    MenuComponent,
    AbstractComponent,
    CardsComponent,
    DashboardComponent,
    DetailsComponent,
    CardDashboardComponent,
    ChartsComponent,
    NewComponent,
    FormsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgApexchartsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
