import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../guard/auth.guard';
import { RegisterComponent } from 'src/app/component/form/register/register.component';
import { CaesarComponent } from 'src/app/component/page/caesar/caesar.component';

const routes: Routes = [
	{
		path: '',
		canActivateChild: [AuthGuard],
		canLoad: ['register'],
		children: [{ path: 'logout', redirectTo: '' }, { path: 'caesar', component: CaesarComponent }]
	},
	{ path: 'register', component: RegisterComponent }
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, {
			onSameUrlNavigation: 'reload',
			enableTracing: false
		})
	],
	exports: [RouterModule]
})
export class RoutingModule {}
