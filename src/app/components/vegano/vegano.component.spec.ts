import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeganoComponent } from './vegano.component';

describe('VeganoComponent', () => {
  let component: VeganoComponent;
  let fixture: ComponentFixture<VeganoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeganoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeganoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
