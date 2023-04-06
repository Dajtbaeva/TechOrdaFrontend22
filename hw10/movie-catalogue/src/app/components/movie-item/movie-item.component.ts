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

  viewMovie() {
    this.router.navigate(['/home', this.movie.id]);
  }
}
