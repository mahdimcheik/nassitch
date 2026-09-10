import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it("crée l'application", () => {
    const fixture = TestBed.createComponent(App);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it("affiche la coquille avec le lien d'évitement et les deux navigations", async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('a[href="#main-content"]')?.textContent).toContain(
      'Aller au contenu principal',
    );
    expect(compiled.querySelector('main#main-content')).toBeTruthy();
    expect(compiled.querySelectorAll('nav[aria-label="Sections"]').length).toBe(2);
  });
});
