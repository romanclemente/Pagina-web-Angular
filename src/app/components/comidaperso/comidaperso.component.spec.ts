import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComidapersoComponent } from './comidaperso.component';

describe('ComidapersoComponent', () => {
  let component: ComidapersoComponent;
  let fixture: ComponentFixture<ComidapersoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComidapersoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComidapersoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
