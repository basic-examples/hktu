import { Validator } from '../..';
import { OrRaw } from '../../../Reducer/boolean/Or';
import { IsLowerAlphaRaw } from './IsLowerAlpha';
import { IsUpperAlphaRaw } from './IsUpperAlpha';

export interface IsAlpha extends Validator<string> {
  validationResult: IsAlphaRaw<this['input']>;
}

export type IsAlphaRaw<C extends string> = OrRaw<
  IsLowerAlphaRaw<C>,
  IsUpperAlphaRaw<C>
>;
