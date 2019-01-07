import {
	MatMenuModule,
	MatIconModule,
	MatCheckboxModule,
	MatCardModule,
	MatSidenavModule,
	MatTooltipModule,
	MatToolbarModule,
	MatButtonModule,
	MatFormFieldModule,
	MatInputModule,
	MatRippleModule,
	MatExpansionModule,
	ErrorStateMatcher,
	ShowOnDirtyErrorStateMatcher,
	MatProgressSpinnerModule,
	MatListModule,
	MatAutocompleteModule,
	MatButtonToggleModule,
	MatChipsModule,
	MatDatepickerModule,
	MatDialogModule,
	MatGridListModule,
	MatNativeDateModule,
	MatPaginatorModule,
	MatProgressBarModule,
	MatRadioModule,
	MatSelectModule,
	MatSliderModule,
	MatSlideToggleModule,
	MatSnackBarModule,
	MatSortModule,
	MatTableModule,
	MatTabsModule,
	MatStepperModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';

const modules = [
	MatButtonModule,
	MatCheckboxModule,
	MatFormFieldModule,
	MatInputModule,
	MatRippleModule,
	MatMenuModule,
	MatIconModule,
	MatCardModule,
	MatSidenavModule,
	MatTooltipModule,
	MatExpansionModule,
	MatToolbarModule,
	MatListModule,
	MatProgressSpinnerModule,
	FlexLayoutModule,
	MatAutocompleteModule,
	MatButtonModule,
	MatButtonToggleModule,
	MatCardModule,
	MatCheckboxModule,
	MatChipsModule,
	MatDatepickerModule,
	MatDialogModule,
	MatExpansionModule,
	MatGridListModule,
	MatIconModule,
	MatInputModule,
	MatListModule,
	MatMenuModule,
	MatNativeDateModule,
	MatPaginatorModule,
	MatProgressBarModule,
	MatProgressSpinnerModule,
	MatRadioModule,
	MatRippleModule,
	MatSelectModule,
	MatSidenavModule,
	MatSliderModule,
	MatSlideToggleModule,
	MatSnackBarModule,
	MatSortModule,
	MatTableModule,
	MatTabsModule,
	MatToolbarModule,
	MatTooltipModule,
	MatStepperModule
];

@NgModule({
	imports: [...modules],
	exports: [...modules],
	providers: [{ provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher }]
})
export class MaterialModule {}
