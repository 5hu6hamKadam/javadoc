import { ITechCategory } from './../components/tech-categories/tech-categories.component';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import TECH_CATEGORIES from '@assets/categories.json';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private categories = new BehaviorSubject(TECH_CATEGORIES as ITechCategory[]);
  public category$ = new Subject<ITechCategory>();
  public categories$ = this.categories.asObservable();

  public getActiveCategory(categoryUrl: string): ITechCategory | undefined {
    const category = this.categories.value.find(
      ({ url }) => url === categoryUrl
    );
    if (category) {
      this.category$.next(category);
    }
    return category;
  }
}
