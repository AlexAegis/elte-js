import { Component, OnInit, Input, ChangeDetectorRef, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ApiResponse } from 'src/app/api/api-response.interface';
import { validateObservable } from 'src/app/validator/observable.validator';
import { CaesarService } from 'src/app/service/caesar/caesar.service';

@Component({
	selector: 'app-seed-form',
	templateUrl: './seed-form.component.html',
	styleUrls: ['./seed-form.component.scss']
})
export class SeedFormComponent implements OnInit {
	constructor(private formBuilder: FormBuilder, private cd: ChangeDetectorRef) {}

	@Input()
	parent: FormGroup;

	seed: FormGroup;

	ngOnInit() {
		this.seed = this.formBuilder.group({
			seed: ['', [Validators.required]]
		});
		this.parent.addControl('seed', this.seed);
	}
}
