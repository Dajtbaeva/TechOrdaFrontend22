import { Component, OnInit } from '@angular/core';
import { IMovie } from 'src/app/models/movie';
import { myMovies } from 'src/app/movie.mock-data';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  term = '';
  movies: IMovie[] = [];
  loading = false;

  ngOnInit(): void {
    this.loading = true;
    this.movies = myMovies;
    this.loading = false;
  }
}
