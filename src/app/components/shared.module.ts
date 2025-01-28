import { NgModule } from '@angular/core';
import { ButtonComponent } from './button/button.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { QuestionComponent } from './question/question.component';
import { QuizComponent } from './quiz/quiz.component';
import { TechCategoriesComponent } from './tech-categories/tech-categories.component';
import { TreeViewComponent } from './tree-view/tree-view.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ScqComponent } from './question/scq/scq.component';
import { McqComponent } from './question/mcq/mcq.component';
import { MarkdownModule } from 'ngx-markdown';
import { FormsModule } from '@angular/forms';

const COMPONENTS = [
  ButtonComponent,
  FooterComponent,
  NavbarComponent,
  QuestionComponent,
  QuizComponent,
  TechCategoriesComponent,
  TreeViewComponent,
  ScqComponent,
  McqComponent,
];
@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, RouterModule, MarkdownModule, FormsModule],
  exports: [...COMPONENTS],
})
export class SharedModule {}
