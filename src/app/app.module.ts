import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { QuizzComponent } from './pages/quizz/quizz.component';
import { SuccessDirective } from './shared/directives/success.directive';
import { FalseDirective } from './shared/directives/false.directive';
import { QuestionService } from './shared/service/question.service';
import { QuizzItemComponent } from './components/quizz-item/quizz-item.component';
import { FormsModule } from '@angular/forms';
import { QuizzService } from './shared/service/quizz.service';
import { HistoriqueComponent } from './pages/historique/historique.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuizzComponent,
    SuccessDirective,
    FalseDirective,
    QuizzItemComponent,
    HistoriqueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [QuestionService,QuizzService],
  bootstrap: [AppComponent]
})
export class AppModule { }
