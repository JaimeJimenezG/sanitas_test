/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Mock_dataService } from './mock_data.service';

describe('Service: Mock_data', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Mock_dataService]
    });
  });

  it('should ...', inject([Mock_dataService], (service: Mock_dataService) => {
    expect(service).toBeTruthy();
  }));
});
