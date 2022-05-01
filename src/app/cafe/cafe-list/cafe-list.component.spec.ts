/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { CafeListComponent } from './cafe-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CafeService } from '../cafe.service';
import { Cafe } from '../cafe';

describe('CafeListComponent', () => {
  let component: CafeListComponent;
  let fixture: ComponentFixture<CafeListComponent>;
  let debug: DebugElement;
  let cafe: Array<Cafe> = [];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CafeListComponent ],
      imports: [HttpClientModule],
      providers: [ CafeService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CafeListComponent);
    component = fixture.componentInstance;
    cafe = [];

    for (let i=0; i<3; i++){
      cafe.push(
        new Cafe(
          faker.datatype.number(2),
          faker.name.firstName("female"),
          faker.lorem.sentence(),
          faker.lorem.sentence(),
          faker.lorem.sentence(),
          faker.datatype.number({min:500, max:1900}),
          faker.image.imageUrl()
        )
      );
    };

    component.cafes = cafe;

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('Debe crearse', () => {
    expect(component).toBeTruthy();
  });

  it("Component has a Table", () => {
    expect(debug.query(By.css("tbody")).childNodes.length).toBeGreaterThan(0);
  });

  it('Debe guardar 3 cafes', () => {
    expect(component.cafes.length).toEqual(3);
  });

  it('Debe tener 4 filas, 1 Encababezado y 3 de cafés', () => {
    const bannerElement: HTMLElement = fixture.nativeElement;
    const tr = bannerElement.querySelectorAll('tr')!;
    expect(tr.length).toBe(4);
  });

  it('Se crea una etiqueta th para el número', () => {
    const bannerElement: HTMLElement = fixture.nativeElement;
    const th = bannerElement.querySelectorAll('th')!;
    expect(th[0].textContent).toEqual('#');
  });
});
