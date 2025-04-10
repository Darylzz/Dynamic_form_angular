import { Component, ViewChild } from '@angular/core';
import { ControlType, FormConfig } from '../control/form-ctrl/form-ctrl';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  formConfig: FormConfig[] = [
    {
      LABEL: 'Name',
      CTRL_KEY: 'name',
      CTRL_TYPE: ControlType.INPUT,
      REQUIRED: true,
      PLACEHOLDER: 'Enter your name',
      WIDTH: 'col-6',
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
    },
  ];

  onSubmit(event: any) {
    console.log(event);
  }
}
