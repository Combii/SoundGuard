import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundDataComponent } from './sound-data.component';

describe('SoundDataComponent', () => {
  let component: SoundDataComponent;
  let fixture: ComponentFixture<SoundDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoundDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoundDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
