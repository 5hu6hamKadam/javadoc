import {
  AsyncPipe,
  NgClass,
  NgFor,
  NgIf,
  UpperCasePipe,
} from '@angular/common';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { map, Observable, Subject, takeUntil } from 'rxjs';
import { CategoryService } from 'src/app/services/category.service';

export interface ITechCategory {
  label: string; // The name of the tech
  icon: string; // Path or class for the icon
  url: string; // URL for navigation
}

@Component({
  selector: 'app-tech-categories',
  templateUrl: './tech-categories.component.html',
})
export class TechCategoriesComponent {
  public categories$: Observable<ITechCategory[]>;
  public activeCategory$: Observable<ITechCategory>;
  @ViewChild('scrollContainer') scrollContainer!: ElementRef<HTMLDivElement>;

  @Input()
  public isInline = false;

  constructor(private categoryService: CategoryService) {
    this.categories$ = this.categoryService.categories$;
    this.activeCategory$ = this.categoryService.category$;
  }

  scrollLeft() {
    if (this.scrollContainer) {
      this.scrollContainer.nativeElement.scrollBy({
        left: -100,
        behavior: 'smooth',
      });
    }
  }

  scrollRight() {
    if (this.scrollContainer) {
      this.scrollContainer.nativeElement.scrollBy({
        left: 100,
        behavior: 'smooth',
      });
    }
  }
}
