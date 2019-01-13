import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
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

	seedFocused: boolean;

	ngOnInit() {
		this.seedFocused = true;
		this.caesar = this.formBuilder.group({
			seed: [
				'',
				[Validators.required],
				[
					validateObservable<ApiResponse<ICaesar.SeedResponse>>(
						(ctrl: AbstractControl) => this.caesarService.shift(ctrl.value),
						(result: ApiResponse<ICaesar.SeedResponse>) =>
							result.data.shift ? { resolved: true } : undefined,
						200,
						false
					)
				]
			],
			decryptedMessage: ['', []],
			encryptedMessage: ['', []]
		});
		this.parent.addControl('caesar', this.caesar);
	}
}
