import { TestBed } from '@angular/core/testing';

import { PokemonsInfosService } from './pokemons-infos.service';

describe('PokemonsInfosService', () => {
  let service: PokemonsInfosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonsInfosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
