import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { GenresPageComponent } from './pages/genres-page/genres-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'genres', component: GenresPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
