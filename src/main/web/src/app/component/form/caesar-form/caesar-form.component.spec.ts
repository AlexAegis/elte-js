import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaesarFormComponent } from './caesar-form.component';

describe('CaesarFormComponent', () => {
	let component: CaesarFormComponent;
	let fixture: ComponentFixture<CaesarFormComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [CaesarFormComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CaesarFormComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
