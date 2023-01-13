import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellorAuthComponent } from './sellor-auth.component';

describe('SellorAuthComponent', () => {
  let component: SellorAuthComponent;
  let fixture: ComponentFixture<SellorAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellorAuthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellorAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
