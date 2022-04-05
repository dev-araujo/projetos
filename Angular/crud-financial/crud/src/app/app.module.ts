import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchComponent } from './components/search/search.component';
import { SidenavModalComponent } from './components/sidenav-modal/sidenav-modal.component';
import { HomeComponent } from './pages/home/home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContainerComponent } from './layout/container/container.component';
import { HeaderComponent } from './components/left-sidebar/header/header.component';
import { MenuComponent } from './components/left-sidebar/menu/menu.component';
import { AbstractComponent } from './components/right-sidebar/abstract/abstract.component';
import { CardsComponent } from './components/right-sidebar/cards/cards.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SidenavModalComponent,
    HomeComponent,
    SidebarComponent,
    ContainerComponent,
    HeaderComponent,
    MenuComponent,
    AbstractComponent,
    CardsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
