import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ControlType, FormConfig } from './form-ctrl';

@Component({
  selector: 'app-form-ctrl',
  standalone: false,
  templateUrl: './form-ctrl.component.html',
  styleUrl: './form-ctrl.component.scss',
})
export class FormCtrlComponent implements OnInit {
  private _formConfig: FormConfig[] = [];
  formGroup: FormGroup = new FormGroup({});
  controlType = ControlType;
  @Input() formConfig: FormConfig[] = [];
  @Output() formValue = new EventEmitter();

  get formConfigForm() {
    this._formConfig = this.formConfig;
    return this._formConfig;
  }

  constructor() {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.formConfigForm.forEach((config) => {
      const validators = this.setValidator(config);
      this.formGroup.addControl(
        config.CTRL_KEY,
        new FormControl(
          {
            value: config.DEFAULT_VALUE ?? null,
            disabled: config.DISABLED ?? false,
          },
          validators
        )
      );
    });
  }

  setValidator(config: FormConfig) {
    const validators = config.REQUIRED
      ? [Validators.required]
      : [Validators.nullValidator];
    return validators;
  }

  onSubmit() {
    this.formGroup.markAllAsTouched();
    if (this.formGroup.valid) {
      this.formValue.emit(this.formGroup.value);
    }
  }

  onClickReset() {
    this.formGroup.reset();
  }
}
