import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpeningBalanceComponent } from './opening-balance.component';

describe('OpeningBalanceComponent', () => {
  let component: OpeningBalanceComponent;
  let fixture: ComponentFixture<OpeningBalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpeningBalanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpeningBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
