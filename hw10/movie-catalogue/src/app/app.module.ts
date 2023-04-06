import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchItemsPipe } from './pipes/search-items.pipe';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { GenresPageComponent } from './pages/genres-page/genres-page.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { MoviePageComponent } from './pages/movie-page/movie-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchItemsPipe,
    NavigationComponent,
    HomePageComponent,
    GenresPageComponent,
    MovieListComponent,
    MovieItemComponent,
    MoviePageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
