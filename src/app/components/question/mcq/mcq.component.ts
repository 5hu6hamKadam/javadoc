import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { Component, Input } from '@angular/core';
import { IScqQuestion } from '../scq/scq.interface';
import { NgFor } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-mcq',
  templateUrl: './mcq.component.html',
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
export class McqComponent {
  @Input()
  public question!: IScqQuestion;
  public isAnswerVisible = false;

  public toggleAnswerVisibility(): void {
    this.isAnswerVisible = !this.isAnswerVisible;
  }
}
