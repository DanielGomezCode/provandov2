import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaoComponent } from './chao.component';

describe('ChaoComponent', () => {
  let component: ChaoComponent;
  let fixture: ComponentFixture<ChaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
