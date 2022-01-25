import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeApiService } from './../../service/poke-api.service';

@Component({
  selector: 'poke-details',
  templateUrl: './poke-details.component.html',
  styleUrls: ['./poke-details.component.scss'],
})
export class PokeDetailsComponent implements OnInit {
  private urlPokemon: string = 'https://pokeapi.co/api/v2/pokemon';

  public pokemon: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokeApiService: PokeApiService
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];

    this.pokeApiService
      .apiGetPokemon(`${this.urlPokemon}/${id}`)
      .subscribe((res) => {
        this.pokemon = res;
      });
  }
}
