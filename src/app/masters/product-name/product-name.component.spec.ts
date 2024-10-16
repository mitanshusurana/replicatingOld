import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductNameComponent } from './product-name.component';

describe('ProductNameComponent', () => {
  let component: ProductNameComponent;
  let fixture: ComponentFixture<ProductNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductNameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
