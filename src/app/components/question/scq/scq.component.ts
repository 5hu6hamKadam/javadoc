import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IScqQuestion } from './scq.interface';
import { MarkdownModule } from 'ngx-markdown';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { ButtonComponent, ButtonType } from '../../button/button.component';

@Component({
  selector: 'app-scq',
  templateUrl: './scq.component.html',
  animations: [
    trigger('expandCollapse', [
      state(
        'collapsed',
        style({ height: '0px', overflow: 'hidden', opacity: 0 })
      ),
      state('expanded', style({ height: '*', overflow: 'auto', opacity: 1 })),
      transition('collapsed <=> expanded', [animate('300ms ease-in-out')]),
    ]),
  ],
})
export class ScqComponent {
  @Input()
  public question!: IScqQuestion;
  public isAnswerVisible = false;
  public buttonType = ButtonType;

  public toggleAnswerVisibility(): void {
    this.isAnswerVisible = !this.isAnswerVisible;
  }
}
