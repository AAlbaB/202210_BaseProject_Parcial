/* tslint:disable:no-unused-variable */
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, async, inject } from '@angular/core/testing';
import { CafeService } from './cafe.service';

describe('Service: Cafe', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CafeService]
    });
  });

  it('Should ...', inject([CafeService], (service: CafeService) => {
    expect(service).toBeTruthy();
  }));
});
