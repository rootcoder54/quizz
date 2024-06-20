import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { QuizzComponent } from './pages/quizz/quizz.component';
import { ReponseComponent } from './components/reponse/reponse.component';
import { SuccessDirective } from './shared/directives/success.directive';
import { FalseDirective } from './shared/directives/false.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuizzComponent,
    ReponseComponent,
    SuccessDirective,
    FalseDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
