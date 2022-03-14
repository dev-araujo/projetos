import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { CheckoutService } from './../../services/checkout/checkout.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  public movieList: Movie[] = [];

  constructor(private checkout: CheckoutService) {}

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies() {
    this.checkout.getData().subscribe((movies) => {
      this.movieList = movies;
    });
  }
}
