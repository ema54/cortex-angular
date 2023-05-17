import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesPracticingComponent } from './directives-practicing.component';

describe('DirectivesPracticingComponent', () => {
  let component: DirectivesPracticingComponent;
  let fixture: ComponentFixture<DirectivesPracticingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirectivesPracticingComponent]
    });
    fixture = TestBed.createComponent(DirectivesPracticingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
