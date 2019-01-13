import { Component, OnInit, Input, ChangeDetectorRef, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ApiResponse } from 'src/app/api/api-response.interface';
import { validateObservable } from 'src/app/validator/observable.validator';
import { CaesarService } from 'src/app/service/caesar/caesar.service';
import * as ICaesar from '../../../api/caesar/caesar.get.interface';

@Component({
	selector: 'app-caesar-form',
	templateUrl: './caesar-form.component.html',
	styleUrls: ['./caesar-form.component.scss']
})
export class CaesarFormComponent implements OnInit {
	constructor(private formBuilder: FormBuilder, public caesarService: CaesarService, private cd: ChangeDetectorRef) {}

	@Input()
	parent: FormGroup;

	caesar: FormGroup;

	ngOnInit() {
		this.caesar = this.formBuilder.group({
			decryptedMessage: ['', []],
			encryptedMessage: ['', []]
		});
		this.parent.addControl('caesar', this.caesar);
	}
}
