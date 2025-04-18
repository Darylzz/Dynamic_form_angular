import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormCtrlComponent } from './form-ctrl.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { KeyFilterModule } from 'primeng/keyfilter';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { InputMaskModule } from 'primeng/inputmask';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CheckboxModule } from 'primeng/checkbox';
import { MultiSelectModule } from 'primeng/multiselect';
import { DatePickerModule } from 'primeng/datepicker';
import { PrimeNG } from 'primeng/config';

const module = [
  InputTextModule,
  KeyFilterModule,
  InputNumberModule,
  ButtonModule,
  InputMaskModule,
  AutoCompleteModule,
  CheckboxModule,
  MultiSelectModule,
  DatePickerModule,
];

@NgModule({
  declarations: [FormCtrlComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, module],
  exports: [FormCtrlComponent, module],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [PrimeNG],
})
export class FormCtrlModule {}
