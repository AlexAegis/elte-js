import { PersonComponent } from '../../form/people/person/person.component';
import { Subscription, Observable, of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewChild, OnDestroy, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { mergeMap, switchMap, defaultIfEmpty, map, takeLast, take } from 'rxjs/operators';
import { ApiResponse } from 'src/app/api/api-response.interface';
import { CaesarFormComponent } from '../../form/caesar-form/caesar-form.component';
import { CaesarService } from 'src/app/service/caesar/caesar.service';

@Component({
	selector: 'app-caesar',
	templateUrl: './caesar.component.html',
	styleUrls: ['./caesar.component.scss']
})
export class CaesarComponent implements OnInit {
	constructor(
		public activatedRoute: ActivatedRoute,
		private formBuilder: FormBuilder,
		private caesarService: CaesarService,
		private router: Router
	) {}

	caesarForm: FormGroup;

	@ViewChild('caesarForm')
	caesarFormComponent: CaesarFormComponent;
	existing: boolean = false;
	loaded: boolean = true;

	shift: number;
	ngOnInit(): void {
		this.caesarForm = this.formBuilder.group({});

		this.activatedRoute.params
			.pipe(
				switchMap(params => this.caesarService.shift(params['seed'])),
				take(1)
			)
			.subscribe(response => {
				console.log(response.data);
				this.shift = Number(response.data);
			});
	}

	dude(): void {
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
		console.log('dude called');
	}
}
