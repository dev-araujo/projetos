import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, NavComponent],
  exports: [HeaderComponent, FooterComponent, NavComponent],
  imports: [CommonModule, MatToolbarModule, MatSidenavModule, MatListModule],
})
export class ComponentsModule {}
