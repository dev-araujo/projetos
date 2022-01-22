import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap,map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  private url: string = "https://pokeapi.co/api/v2/pokemon?limit=150&offset=0"

  constructor(
    private http: HttpClient
  ) { }

  get apiListPokemon(): Observable<any> {
    return this.http.get<any>(this.url).pipe(
      tap(res => res),
      tap(res => {
        res.results.map((resPokemons: any) => {

          this.apiGetPokemon(resPokemons.url).subscribe(
            res => resPokemons.status = res
          );

        })
      })
    )
  }
  public apiGetPokemon(url: string): Observable<any> {
    return this.http.get<any>(url).pipe(map(res=>res))
  }
}
