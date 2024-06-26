import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { QuizzComponent } from './pages/quizz/quizz.component';
import { ReponseComponent } from './components/reponse/reponse.component';
import { SuccessDirective } from './shared/directives/success.directive';
import { FalseDirective } from './shared/directives/false.directive';
import { QuestionService } from './shared/service/question.service';

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
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
