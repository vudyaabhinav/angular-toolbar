import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSpaceComponent } from './test-space.component';

describe('TestSpaceComponent', () => {
  let component: TestSpaceComponent;
  let fixture: ComponentFixture<TestSpaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestSpaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
