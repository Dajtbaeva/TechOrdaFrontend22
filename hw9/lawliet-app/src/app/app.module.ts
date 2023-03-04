import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { InfoPageComponent } from './pages/info-page/info-page.component';
import { CardComponent } from './components/card/card.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { TestimonialPageComponent } from './pages/testimonial-page/testimonial-page.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { QuestionsPageComponent } from './pages/questions-page/questions-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    HomePageComponent,
    InfoPageComponent,
    CardComponent,
    NumbersPageComponent,
    TestimonialPageComponent,
    FeedbackComponent,
    QuestionsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
