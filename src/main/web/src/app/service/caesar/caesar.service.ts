import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from 'src/app/api/api-response.interface';

import * as ICaesar from '../../api/caesar/caesar.get.interface';
@Injectable({
	providedIn: 'root'
})
export class CaesarService {
	constructor(private http: HttpClient) {}

	shift(seed: string): Observable<ApiResponse<ICaesar.SeedResponse>> {
		return this.http.get<ApiResponse<ICaesar.SeedResponse>>(ICaesar.url(seed));
	}
}
