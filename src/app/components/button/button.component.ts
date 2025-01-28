import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

export enum ButtonType {
  Default,
  Success,
}
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input()
  public type = ButtonType.Default;
  @Input()
  public label!: string;
  public buttonType = ButtonType;

  @Output()
  public click = new EventEmitter<void>();
}
