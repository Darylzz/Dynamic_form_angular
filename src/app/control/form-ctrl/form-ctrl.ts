import { ValidatorFn } from '@angular/forms';

export interface FormConfig {
  LABEL?: string;
  CTRL_TYPE?: ControlType;
  CTRL_KEY: string;
  REQUIRED?: boolean;
  PLACEHOLDER?: string;
  DEFAULT_VALUE?: string;
  DISABLED?: boolean;
  WIDTH: string; //concept grid system
  USE_GROUPING?: boolean;
  MODE_NUMBER?: string; //number mode
  MIN_LENGTH?: number;
  MAX_LENGTH?: number;
  MAX_FRACTION_DIGITS?: number;
  MIN_FRACTION_DIGITS?: number;
  MASK_PLACE?: string; //for mask input
}

export enum ControlType {
  INPUT,
  SELECT,
  NUMBER,
  MARK,
  PHONE,
}
