import { Filter } from '../..';
import { IfHasRaw } from '../../../util/IfHasRaw';
import { RawField } from '../../../util/RawField';

export interface IsDigit extends Filter<string> {
  ok: IfHasRaw<this, 'input', IsDigitRaw<RawField<this, 'input'>>, boolean>;
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
