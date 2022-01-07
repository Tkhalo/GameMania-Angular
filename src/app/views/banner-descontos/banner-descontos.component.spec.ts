import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerDescontosComponent } from './banner-descontos.component';

describe('BannerDescontosComponent', () => {
  let component: BannerDescontosComponent;
  let fixture: ComponentFixture<BannerDescontosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerDescontosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerDescontosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
