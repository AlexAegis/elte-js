import { TestBed } from '@angular/core/testing';

import { CaesarService } from './caesar.service';

describe('CaesarService', () => {
	beforeEach(() => TestBed.configureTestingModule({}));

	it('should be created', () => {
		const service: CaesarService = TestBed.get(CaesarService);
		expect(service).toBeTruthy();
	});
});
