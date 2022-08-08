import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisaHeroComponent } from './pesquisa-hero.component';

describe('PesquisaHeroComponent', () => {
  let component: PesquisaHeroComponent;
  let fixture: ComponentFixture<PesquisaHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PesquisaHeroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PesquisaHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
