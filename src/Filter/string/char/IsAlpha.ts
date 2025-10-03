import { Filter } from '../..';
import { OrRaw } from '../../../Reducer/boolean/Or';
import { IfHasRaw } from '../../../util/IfHasRaw';
import { RawField } from '../../../util/RawField';
import { IsLowerAlphaRaw } from './IsLowerAlpha';
import { IsUpperAlphaRaw } from './IsUpperAlpha';

export interface IsAlpha extends Filter<string> {
  ok: IfHasRaw<this, 'input', IsAlphaRaw<RawField<this, 'input'>>, boolean>;
}

export type IsAlphaRaw<C extends string> = OrRaw<
  IsLowerAlphaRaw<C>,
  IsUpperAlphaRaw<C>
>;
