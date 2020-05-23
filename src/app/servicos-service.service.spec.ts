import { TestBed } from '@angular/core/testing';

import { ServicosServiceService } from './servicos-service.service';

describe('ServicosServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicosServiceService = TestBed.get(ServicosServiceService);
    expect(service).toBeTruthy();
  });
});
