import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IslandPopupFormComponent } from './island-popup-form.component';

describe('IslandPopupFormComponent', () => {
  let component: IslandPopupFormComponent;
  let fixture: ComponentFixture<IslandPopupFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IslandPopupFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IslandPopupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
