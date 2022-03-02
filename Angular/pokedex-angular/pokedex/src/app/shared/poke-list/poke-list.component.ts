import { Component, OnInit } from '@angular/core';
import { PokeApiService } from '../../service/poke-api.service';
@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  private setAllPokemons: any
  public getAllPokemons: any
  public total: number = 10
  page: number = 1

  constructor(
    private pokeApiService: PokeApiService
  ) { }

  ngOnInit(): void {

    this.pokeApiService.apiListPokemon.subscribe(
      res => {
        this.setAllPokemons = res.results
        this.getAllPokemons = this.setAllPokemons
      }
    )
  }

  public getSearch(value: string) {
    const filter = this.setAllPokemons.filter((res: any) => {
      return res.name.toLowerCase().includes(value.toLocaleLowerCase())
    })

    this.getAllPokemons = filter
  }

}
