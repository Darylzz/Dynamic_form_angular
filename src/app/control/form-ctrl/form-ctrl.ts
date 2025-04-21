import { ValidatorFn } from '@angular/forms';

export interface FormConfig {
  LABEL?: string;
  CTRL_TYPE?: ControlType;
  CTRL_KEY: string;
  REQUIRED?: boolean;
  PLACEHOLDER?: string;
  DEFAULT_VALUE?: string;
  DISABLED: boolean;
  WIDTH: string; //concept grid system
  USE_GROUPING?: boolean;
  MODE_NUMBER?: string; //number mode
  MIN_LENGTH?: number;
  MAX_LENGTH?: number;
  MAX_FRACTION_DIGITS?: number;
  MIN_FRACTION_DIGITS?: number;
  MASK_PLACE?: string; //for mask input
  SUGGESTIONS_AUTOCOMPLETE?: any[]; //for autocomplete input
  DROPDOWN_AUTOCOMPLETE?: boolean; //for autocomplete dropdown
  EMPTY_MESSAGE?: string;
  SHOW_CLEAR_AUTOCOMPLETE?: boolean; //for autocomplete icon clear
  ERROR_MESSAGE?: string; //for handle error message
  OPTION?: any[]; //for lookup dropdown
  OPTION_LABEL?: string;
  OPTION_VALUE?: string;
  MAX_SELECTION_MULTISELECT?: number;
  SHOW_ICON?: boolean;
  SHOW_ICON_CLEAR?: boolean;
  MIN_DATE?: Date;
  MAX_DATE?: Date;
  INVALID_FORM?: boolean; //not set default value
  TOGGLE_MARK_PASSWORD?: boolean;
  AUTO_RESIZE?: boolean;
  RADIO_OPTION?: RadioOption[];
}

export enum ControlType {
  INPUT,
  SELECT,
  NUMBER,
  MARK,
  PHONE,
  AUTOCOMPLETE,
  CHECKBOX,
  MULTISELECT,
  MULTICHIP,
  DATEPICKER,
  PASSWORD,
  TEXTAREA,
  RADIOBUTTON,
}

interface RadioOption {
  key: string;
  name: string;
}
