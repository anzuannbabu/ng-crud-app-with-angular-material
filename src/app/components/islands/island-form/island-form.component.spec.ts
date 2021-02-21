import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IslandFormComponent } from './island-form.component';

describe('IslandFormComponent', () => {
  let component: IslandFormComponent;
  let fixture: ComponentFixture<IslandFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IslandFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IslandFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
