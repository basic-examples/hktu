import { Filter } from '..';
import { IfHasRaw } from '../../util/IfHasRaw';
import { RawField } from '../../util/RawField';
import { InvokeFilter } from '../InvokeFilter';

export interface AllVariantsAre<K extends Filter<unknown>>
  extends Filter<K['input']> {
  ok: IfHasRaw<
    this,
    'input',
    AllVariantsAreRaw<K, RawField<this, 'input'>>,
    boolean
  >;
}

export type AllVariantsAreRaw<
  K extends Filter<unknown>,
  I extends K['input'],
> = (I extends K['input'] ? InvokeFilter<K, I> : never) extends true
  ? true
  : false;
