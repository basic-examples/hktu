import { Filter } from '../..';
import { OrRaw } from '../../../Reducer/boolean/Or';
import { IfHasRaw } from '../../../util/IfHasRaw';
import { RawField } from '../../../util/RawField';
import { IsAlphaRaw } from './IsAlpha';
import { IsDigitRaw } from './IsDigit';

export interface IsAlnum extends Filter<string> {
  ok: IfHasRaw<this, 'input', IsAlnumRaw<RawField<this, 'input'>>, boolean>;
}

export type IsAlnumRaw<C extends string> = OrRaw<IsAlphaRaw<C>, IsDigitRaw<C>>;
