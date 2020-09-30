import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameReleasesComponent } from './game-releases.component';

describe('GameReleasesComponent', () => {
  let component: GameReleasesComponent;
  let fixture: ComponentFixture<GameReleasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameReleasesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameReleasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
