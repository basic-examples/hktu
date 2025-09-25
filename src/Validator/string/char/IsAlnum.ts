import { Validator } from '../..';
import { IsDigitRaw } from './IsDigit';
import { IsAlphaRaw } from './IsAlpha';
import { OrRaw } from '../../../Reducer/boolean/Or';

export interface IsAlnum extends Validator<string> {
  validationResult: IsAlnumRaw<this['input']>;
}

export type IsAlnumRaw<C extends string> = OrRaw<IsAlphaRaw<C>, IsDigitRaw<C>>;
