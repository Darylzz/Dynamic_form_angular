import { Component, OnInit } from '@angular/core';
import { ControlType, FormConfig } from '../control/form-ctrl/form-ctrl';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  formConfig: FormConfig[] = [
    {
      LABEL: 'Name',
      CTRL_KEY: 'name',
      CTRL_TYPE: ControlType.INPUT,
      REQUIRED: true,
      PLACEHOLDER: 'Enter your name',
      WIDTH: 'col-6',
      DISABLED: true,
      ERROR_MESSAGE: 'Name is required',
    },
    {
      LABEL: 'Email',
      CTRL_KEY: 'email',
      CTRL_TYPE: ControlType.INPUT,
      REQUIRED: true,
      PLACEHOLDER: 'Enter your email',
      DISABLED: false,
      WIDTH: 'col-6',
      ERROR_MESSAGE: 'Email is required',
    },
    {
      LABEL: 'Phone',
      CTRL_KEY: 'phone',
      CTRL_TYPE: ControlType.PHONE,
      REQUIRED: true,
      PLACEHOLDER: '(999) 999-9999',
      WIDTH: 'col-6',
      MASK_PLACE: '(999) 999-9999',
      DISABLED: false,
      ERROR_MESSAGE: 'Phone is required',
    },
    {
      LABEL: 'AutoComplete',
      CTRL_KEY: 'autocomplete',
      CTRL_TYPE: ControlType.AUTOCOMPLETE,
      REQUIRED: true,
      WIDTH: 'col-6',
      PLACEHOLDER: 'Select a country',
      DISABLED: false,
      EMPTY_MESSAGE: 'No countries found',
      SHOW_CLEAR_AUTOCOMPLETE: true,
      ERROR_MESSAGE: 'Country is required',
    },
    {
      LABEL: 'Checkbox',
      CTRL_KEY: 'checkbox',
      CTRL_TYPE: ControlType.CHECKBOX,
      REQUIRED: true,
      WIDTH: 'col-6',
      ERROR_MESSAGE: 'Checkbox is required',
    },
    {
      LABEL: 'MULTISELECT',
      CTRL_KEY: 'multiselect',
      CTRL_TYPE: ControlType.MULTISELECT,
      REQUIRED: true,
      WIDTH: 'col-6',
      OPTION_LABEL: 'name',
      OPTION_VALUE: 'code',
      OPTION: [],
      MAX_SELECTION_MULTISELECT: 2,
      ERROR_MESSAGE: 'Multiselect is required',
      PLACEHOLDER: 'Select a country',
    },
    {
      LABEL: 'MULTISELECT WITH CHIP',
      CTRL_KEY: 'multiselectWithChip',
      CTRL_TYPE: ControlType.MULTICHIP,
      REQUIRED: true,
      WIDTH: 'col-6',
      OPTION_LABEL: 'name',
      OPTION_VALUE: 'code',
      OPTION: [],
      MAX_SELECTION_MULTISELECT: 2,
      ERROR_MESSAGE: 'Multiselect is required',
      PLACEHOLDER: 'Select a country',
    },
  ];

  constructor() {}

  ngOnInit(): void {
    const mockLookup = [
      { name: 'USA', code: 'US' },
      { name: 'Germany', code: 'DE' },
      { name: 'Italy', code: 'IT' },
      { name: 'France', code: 'FR' },
      { name: 'Spain', code: 'ES' },
      { name: 'Poland', code: 'PL' },
    ];
    const indexAutocomplete = this.formConfig.findIndex(
      (item) => item.CTRL_KEY === 'autocomplete'
    );
    const indexMultiSelect = this.formConfig.findIndex(
      (item) => item.CTRL_KEY === 'multiselect'
    );
    const indexMultiChip = this.formConfig.findIndex(
      (item) => item.CTRL_KEY === 'multiselectWithChip'
    );
    this.formConfig[indexAutocomplete].SUGGESTIONS_AUTOCOMPLETE = mockLookup;
    this.formConfig[indexMultiSelect].OPTION = mockLookup;
    this.formConfig[indexMultiChip].OPTION = mockLookup;
  }

  onSubmit(event: any) {
    console.log(event);
  }
}
