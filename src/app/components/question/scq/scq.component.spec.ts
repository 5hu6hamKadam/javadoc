import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScqComponent } from './scq.component';

describe('ScqComponent', () => {
  let component: ScqComponent;
  let fixture: ComponentFixture<ScqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScqComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
