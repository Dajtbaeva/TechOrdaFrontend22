import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IMovie } from 'src/app/models/movie';
import { myMovies } from 'src/app/movie.mock-data';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css'],
})
export class MoviePageComponent {
  movie!: IMovie;
  movieId!: number;
  term = '';
  genresMovies: IMovie[] = [];
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.movieId = this.route.snapshot.params['id'];
    const neededMovie = myMovies.find((movie) => movie.id == this.movieId);
    if (neededMovie) {
      this.movie = neededMovie;
    }
    this.genresMovies = myMovies.filter((movie) =>
      movie.genres.some((genre) => this.movie.genres.includes(genre))
    );
  }

  goBack() {
    this.router.navigate(['/albums']);
  }
}
