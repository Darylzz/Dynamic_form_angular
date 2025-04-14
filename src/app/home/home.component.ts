import { Component, OnInit, ViewChild } from '@angular/core';
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
    },
    {
      LABEL: 'Email',
      CTRL_KEY: 'email',
      CTRL_TYPE: ControlType.INPUT,
      REQUIRED: true,
      PLACEHOLDER: 'Enter your email',
      DISABLED: false,
      WIDTH: 'col-6',
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
    },
  ];

  ngOnInit(): void {
    const indexAutocomplete = this.formConfig.findIndex(
      (item) => item.CTRL_KEY === 'autocomplete'
    );
    console.log(indexAutocomplete);
    this.formConfig[indexAutocomplete].SUGGESTIONS_AUTOCOMPLETE = [
      { name: 'USA', code: 'US' },
      { name: 'Germany', code: 'DE' },
      { name: 'Italy', code: 'IT' },
      { name: 'France', code: 'FR' },
      { name: 'Spain', code: 'ES' },
      { name: 'Poland', code: 'PL' },
    ];
  }

  onSubmit(event: any) {
    console.log(event);
  }
}
