import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoutcastComponent } from './shoutcast.component';

describe('ShoutcastComponent', () => {
  let component: ShoutcastComponent;
  let fixture: ComponentFixture<ShoutcastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoutcastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoutcastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
