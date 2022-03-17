import { Injectable } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { environment } from './../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  public Api: string | any;
  public movieList: Movie[] = [];

  constructor(private httpClient: HttpClient) {
    this.Api = environment.api;
  }

  getData(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(this.Api);
  }
}
