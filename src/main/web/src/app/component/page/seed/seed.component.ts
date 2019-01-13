import { PersonComponent } from '../../form/people/person/person.component';
import { Subscription, Observable, of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewChild, OnDestroy, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { mergeMap, switchMap, defaultIfEmpty } from 'rxjs/operators';
import { ApiResponse } from 'src/app/api/api-response.interface';
import { CaesarFormComponent } from '../../form/caesar-form/caesar-form.component';
import { CaesarService } from 'src/app/service/caesar/caesar.service';
import { SeedFormComponent } from '../../form/seed-form/seed-form.component';

@Component({
	selector: 'app-seed',
	templateUrl: './seed.component.html',
	styleUrls: ['./seed.component.scss']
})
export class SeedComponent implements OnInit, OnDestroy, AfterViewInit {
	constructor(public activatedRoute: ActivatedRoute, private formBuilder: FormBuilder, private router: Router) {}

	seedForm: FormGroup;

	@ViewChild('seedForm')
	seedFormComponent: SeedFormComponent;
	unsub: Array<Subscription> = [];
	existing: boolean = false;
	loaded: boolean = true;

	ngOnInit(): void {
		this.seedForm = this.formBuilder.group({});
	}

	ngAfterViewInit(): void {}

	submit(): void {
		this.router.navigate(['/caesar/', this.seedForm.controls['seed'].get('seed').value]);
	}

	ngOnDestroy(): void {
		this.unsub.forEach(sub => {
			sub.unsubscribe();
		});
	}
}
