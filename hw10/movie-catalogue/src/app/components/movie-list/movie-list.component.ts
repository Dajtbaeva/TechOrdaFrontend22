import { Component, Input } from '@angular/core';
import { IMovie } from 'src/app/models/movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent {
  @Input()
  term!: string;
  @Input()
  movies!: IMovie[];

  deleteMovie(id: number, name: string) {
    this.movies = this.movies.filter((x) => x.id !== id);
    alert(`${name} will be DELETED!`);
  }
}
