import { Component, OnInit, HostListener, OnDestroy, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../model/user.interface';
import { AuthService } from 'src/app/services/auth.service';
import { Subscription, interval, Observable, of, timer } from 'rxjs';
import { map } from 'rxjs/operators';
import * as moment from 'moment';
import { Moment } from 'moment';

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
	@Input()
	user: User;

	expiration: Moment;
	time$: Observable<Moment>;

	constructor(private http: HttpClient, public auth: AuthService) {}

	ngOnInit() {
		this.expiration = moment(this.auth.getExpiration());
		this.time$ = timer(0, 1000).pipe(map(() => moment()));
	}
}
