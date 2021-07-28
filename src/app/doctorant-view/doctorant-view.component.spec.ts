import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorantViewComponent } from './doctorant-view.component';

describe('DoctorantViewComponent', () => {
  let component: DoctorantViewComponent;
  let fixture: ComponentFixture<DoctorantViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorantViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorantViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
