import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { ContentHomeComponent } from './content-home/content-home.component';
import { CardComponent } from './card/card.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

import { CompRoutingModule } from './comp-routing.module';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ContentHomeComponent,
    CardComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ContentHomeComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    CompRoutingModule,
  ],
})
export class ComponentsModule {}
