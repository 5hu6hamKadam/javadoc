import {
  NgIf,
  NgFor,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
} from '@angular/common';
import { Component, Input } from '@angular/core';
import { ScqComponent } from './scq/scq.component';
import { IQuestion } from './question.interface';
import { McqComponent } from './mcq/mcq.component';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
})
export class QuestionComponent {
  @Input()
  public questions!: IQuestion[];
}
