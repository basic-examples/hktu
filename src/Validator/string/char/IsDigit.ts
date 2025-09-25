import { Validator } from '../..';

export interface IsDigit extends Validator<string> {
  validationResult: IsDigitRaw<this['input']>;
}

export type IsDigitRaw<C extends string> = C extends
  | '0'
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  ? true
  : false;
