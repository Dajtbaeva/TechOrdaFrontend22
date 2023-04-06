import { Component, OnInit } from '@angular/core';
import { IMovie } from 'src/app/models/movie';
import { myMovies } from 'src/app/movie.mock-data';
import { GenreType } from 'src/app/movie.model';

@Component({
  selector: 'app-genres-page',
  templateUrl: './genres-page.component.html',
  styleUrls: ['./genres-page.component.css'],
})
export class GenresPageComponent implements OnInit {
  term = '';
  genres!: GenreType[];
  selectedGenre!: GenreType;
  movies: IMovie[] = [];

  // ngOnInit() {
  //   this.genres = flatMap(new Set(myMovies.map((movie) => movie.genres)));
  //   this.movies = myMovies;
  // }

  ngOnInit() {
    const uniqueGenres = [
      ...new Set(myMovies.flatMap((movie) => movie.genres)),
    ] as GenreType[];

    this.movies = myMovies.map((movie) => {
      const uniqueMovieGenres = movie.genres.filter((genre) =>
        uniqueGenres.includes(genre)
      );
      return {
        ...movie,
        genres: uniqueMovieGenres,
      };
    });

    this.genres = uniqueGenres;
  }

  onSelect(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.selectedGenre = target.value as GenreType;
  }

  get filteredMovies(): IMovie[] {
    return this.movies.filter((movie) =>
      movie.genres.includes(this.selectedGenre)
    );
  }
}
