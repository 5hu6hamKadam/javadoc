import { CommonModule, NgClass, NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ITechCategory } from '../tech-categories/tech-categories.component';

export type childTopic = Array<ITopic & { url: string }>;
export interface ITopic {
  id: string; // Unique identifier
  label: string; // Display name of the topic
  children?: childTopic; // Subtopics (optional)
}

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
})
export class TreeViewComponent {
  @Input() topics: ITopic[] = [];

  searchTerm: string = ''; // For filtering topics

  constructor(public router: Router) {}
}
