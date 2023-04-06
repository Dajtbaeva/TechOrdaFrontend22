import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IMovie } from 'src/app/models/movie';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css'],
})
export class MovieItemComponent {
  @Input()
  movie!: IMovie;
  @Output() remove = new EventEmitter();

  constructor(private router: Router) {}

  viewMovie(movie: IMovie) {
    this.router.navigate(['/movies', movie.id]);
  }

  removeMovie() {
    const movieId = this.movie.id;
    this.remove.emit(movieId);
  }
}
