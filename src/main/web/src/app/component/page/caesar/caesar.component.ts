import { PersonComponent } from '../../form/people/person/person.component';
import { Subscription, Observable, of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewChild, OnDestroy, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { mergeMap, switchMap, defaultIfEmpty } from 'rxjs/operators';
import { ApiResponse } from 'src/app/api/api-response.interface';
import { CaesarFormComponent } from '../../form/caesar-form/caesar-form.component';
import { CaesarService } from 'src/app/service/caesar/caesar.service';

@Component({
	selector: 'app-caesar',
	templateUrl: './caesar.component.html',
	styleUrls: ['./caesar.component.scss']
})
export class CaesarComponent implements OnInit, OnDestroy, AfterViewInit {
	constructor(
		public activatedRoute: ActivatedRoute,
		private formBuilder: FormBuilder,
		private caesarService: CaesarService,
		private router: Router
	) {}

	caesarForm: FormGroup;

	@ViewChild('caesarForm')
	caesarFormComponent: CaesarFormComponent;
	unsub: Array<Subscription> = [];
	existing: boolean = false;
	loaded: boolean = true;

	ngOnInit(): void {
		this.caesarForm = this.formBuilder.group({});
		/*this.caesarFromParam$ = this.activatedRoute.params.pipe(
			switchMap(params => {
				console.log('resolved!!');
				if (params && params.id) {
					this.loaded = false;
					return this.caesarService.movie(params.id);
				} else return of();
			})
		);
		this.unsub.push(
			this.caesarFromParam$.subscribe(result => {
				if (result) {
					console.log('yay existing!!');

					const actorsArray: FormArray = this.caesarForm.get('movie').get('actors') as FormArray;

					for (let i = 0; i < result.actors.length; i++) {
						const actorGroup: FormGroup = this.formBuilder.group({
							person: PersonComponent.create(this.formBuilder)
						});
						actorsArray.push(actorGroup);
					}

					//this.movieForm.patchValue({ movie: result });

					this.existing = true;
				}
			})
		);*/
	}

	ngAfterViewInit(): void {
		/*this.unsub.push(
			this.caesarFromParam$.subscribe(result => {
				this.loaded = true;
				if (result) {
					this.caesarForm.patchValue({ movie: result });
				}
			})
		);*/
	}
	save(): void {
		/*let o = this.caesarForm.value;
		this.unsub.push(
			this.caesarService.save(this.caesarForm.value.movie).subscribe(
				movie => this.router.navigate(['movies'], { queryParams: { last: movie.id } }),
				err => {
					console.log(`errored: ${err}`);
					console.log(err);
				}
			)
		);*/
		console.log('save called');
	}

	ngOnDestroy(): void {
		this.unsub.forEach(sub => {
			sub.unsubscribe();
		});
	}
}
