import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination'; 
import {RouterModule} from '@angular/router'

// components
import { PokeHeaderComponent } from './poke-header/poke-header.component';
import { PokeSearchComponent } from './poke-search/poke-search.component';
import { PokeListComponent } from './poke-list/poke-list.component';
import { PokeDetailsComponent } from './poke-details/poke-details.component';

@NgModule({
  declarations: [
    PokeHeaderComponent,
    PokeSearchComponent,
    PokeListComponent,
    PokeDetailsComponent
  ],
  exports:[
    PokeHeaderComponent,
    PokeSearchComponent,
    PokeListComponent,
    PokeDetailsComponent
  ],
  imports: [
    CommonModule,
    [ NgxPaginationModule],
    RouterModule,
  ]
})
export class SharedModule { }
