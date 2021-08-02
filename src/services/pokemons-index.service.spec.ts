import { TestBed } from '@angular/core/testing';

import { PokemonsIndexService } from './pokemons-index.service';

describe('PokemonsIndexService', () => {
  let service: PokemonsIndexService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonsIndexService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
