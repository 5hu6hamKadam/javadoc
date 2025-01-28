import { Component, Input } from '@angular/core';
import { IQuiz } from 'src/app/services/tutorial.service';
import { QuestionComponent } from '../question/question.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
})
export class QuizComponent {
  @Input()
  public quiz!: IQuiz | undefined;
}
