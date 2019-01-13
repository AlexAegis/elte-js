import { PersonComponent } from '../../form/people/person/person.component';
import { Subscription, Observable, of, Subject, timer } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewChild, OnDestroy, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { mergeMap, switchMap, defaultIfEmpty, map, takeLast, take, debounce } from 'rxjs/operators';
import { ApiResponse } from 'src/app/api/api-response.interface';
import { CaesarFormComponent } from '../../form/caesar-form/caesar-form.component';
import { CaesarService } from 'src/app/service/caesar/caesar.service';
import { log } from 'util';

@Component({
	selector: 'app-caesar',
	templateUrl: './caesar.component.html',
	styleUrls: ['./caesar.component.scss']
})
export class CaesarComponent implements OnInit {
	constructor(
		public activatedRoute: ActivatedRoute,
		private formBuilder: FormBuilder,
		private caesarService: CaesarService
	) {}

	caesarForm: FormGroup;

	@ViewChild('caesarForm')
	caesarFormComponent: CaesarFormComponent;
	existing: boolean = false;
	loaded: boolean = true;

	shift: number;

	prevVal: any = {
		decryptedMessage: '',
		encryptedMessage: ''
	};

	private subject: Subject<string> = new Subject();

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

		this.subject.pipe(debounce(() => timer(200))).subscribe(() => {
			if (this.shift) {
				const val = <{ decryptedMessage: string; encryptedMessage: string }>(
					this.caesarForm.controls['caesar'].value
				);
				if (this.prevVal.decryptedMessage !== val.decryptedMessage) {
					this.caesarForm.controls['caesar'].patchValue({
						encryptedMessage: [...val.decryptedMessage]
							.map((char: string) => String.fromCharCode(char.charCodeAt(0) + ((this.shift % 24) - 24)))
							.join('')
					});
				} else if (this.prevVal.encryptedMessage !== val.encryptedMessage) {
					this.caesarForm.controls['caesar'].patchValue({
						decryptedMessage: [...val.encryptedMessage]
							.map((char: string) => String.fromCharCode(char.charCodeAt(0) - ((this.shift % 24) - 24)))
							.join('')
					});
				}

				this.prevVal = this.caesarForm.controls['caesar'].value;
			}
		});
	}

	change(): void {
		this.subject.next();
	}
}
