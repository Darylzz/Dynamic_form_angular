import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ControlType, FormConfig } from './form-ctrl';
import { AutoCompleteCompleteEvent } from 'primeng/autocomplete';
import { ThLocale } from '../../utils/dateFormat';
import { PrimeNG } from 'primeng/config';

@Component({
  selector: 'app-form-ctrl',
  standalone: false,
  templateUrl: './form-ctrl.component.html',
  styleUrl: './form-ctrl.component.scss',
})
export class FormCtrlComponent implements OnInit, OnChanges {
  formGroup: FormGroup = new FormGroup({});
  controlType = ControlType;
  filteredAutoComplete: any[] = [];
  thLocale = ThLocale;
  @Input() formConfig: FormConfig[] = [];
  @Output() formValue = new EventEmitter();

  constructor(private primgNG: PrimeNG) {}

  ngOnInit(): void {
    this.primgNG.setTranslation(this.thLocale);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['formConfig']) {
      this.createForm();
      this.formConfig.forEach((config) => {
        if (config.DISABLED) {
          this.formGroup.get(config.CTRL_KEY)?.disable();
        } else {
          this.formGroup.get(config.CTRL_KEY)?.enable();
        }
      });
    }
  }

  createForm() {
    this.formConfig.forEach((config) => {
      const validators = this.setValidator(config);
      this.formGroup.addControl(
        config.CTRL_KEY,
        new FormControl(config.DEFAULT_VALUE ?? null, validators)
      );
    });
  }

  setValidator(config: FormConfig) {
    let validators = [];
    if (config.REQUIRED) {
      validators.push(Validators.required);
    }
    if (config.CTRL_KEY === 'email') {
      validators.push(Validators.email);
    }
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
    console.log(this.formGroup);
    if (this.formGroup.valid) {
      this.formValue.emit(this.formGroup.value);
    }
  }

  onClickReset() {
    this.formGroup.reset();
  }
}
