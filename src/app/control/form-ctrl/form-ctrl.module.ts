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

const module = [
  InputTextModule,
  KeyFilterModule,
  InputNumberModule,
  ButtonModule,
  InputMaskModule,
  AutoCompleteModule,
];

@NgModule({
  declarations: [FormCtrlComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, module],
  exports: [FormCtrlComponent, module],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FormCtrlModule {}
