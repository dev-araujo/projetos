import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentHomeComponent } from './content-home/content-home.component';
import { NavComponent } from './nav/nav.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MatCardModule} from '@angular/material/card'


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ContentHomeComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ContentHomeComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
  ],
})
export class ComponentsModule {}
