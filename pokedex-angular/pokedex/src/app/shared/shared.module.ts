import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination'; 
import {RouterModule} from '@angular/router'

// components
import { PokeHeaderComponent } from './poke-header/poke-header.component';
import { PokeSearchComponent } from './poke-search/poke-search.component';
import { PokeListComponent } from './poke-list/poke-list.component';

@NgModule({
  declarations: [
    PokeHeaderComponent,
    PokeSearchComponent,
    PokeListComponent
  ],
  exports:[
    PokeHeaderComponent,
    PokeSearchComponent,
    PokeListComponent,
  ],
  imports: [
    CommonModule,
    [ NgxPaginationModule],
    RouterModule,
  ]
})
export class SharedModule { }
