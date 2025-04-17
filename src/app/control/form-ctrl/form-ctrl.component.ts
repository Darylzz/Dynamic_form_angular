import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ControlType, FormConfig } from './form-ctrl';
import { AutoCompleteCompleteEvent } from 'primeng/autocomplete';

@Component({
  selector: 'app-form-ctrl',
  standalone: false,
  templateUrl: './form-ctrl.component.html',
  styleUrl: './form-ctrl.component.scss',
})
export class FormCtrlComponent implements OnChanges {
  formGroup: FormGroup = new FormGroup({});
  controlType = ControlType;
  filteredAutoComplete: any[] = [];
  @Input() formConfig: FormConfig[] = [];
  @Output() formValue = new EventEmitter();

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['formConfig']) {
      this.createForm();
    }
  }

  createForm() {
    this.formConfig.forEach((config) => {
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

  onCompleteMethodAutocomplete(event: AutoCompleteCompleteEvent) {
    setTimeout(() => {
      const indexAutocomplete = this.formConfig.findIndex(
        (item: FormConfig) => item.CTRL_TYPE === ControlType.AUTOCOMPLETE
      );
      this.filteredAutoComplete = this.formConfig[
        indexAutocomplete
      ].SUGGESTIONS_AUTOCOMPLETE?.filter((item) =>
        item.name.toLowerCase().includes(event.query.toLowerCase())
      ) as any;
    }, 1000);
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
