import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDetalhesComponent } from './hero-detalhes.component';

describe('HeroDetalhesComponent', () => {
  let component: HeroDetalhesComponent;
  let fixture: ComponentFixture<HeroDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroDetalhesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
