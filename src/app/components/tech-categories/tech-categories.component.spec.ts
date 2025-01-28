import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechCategoriesComponent } from './tech-categories.component';

describe('TechCategoriesComponent', () => {
  let component: TechCategoriesComponent;
  let fixture: ComponentFixture<TechCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechCategoriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TechCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
