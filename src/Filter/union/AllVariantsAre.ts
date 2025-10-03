import { Filter } from '..';
import { IfHasRaw } from '../../util/IfHasRaw';
import { RawField } from '../../util/RawField';
import { InvokeFilter } from '../InvokeFilter';

export interface AllVariantsAre<T, K extends Filter<T>> extends Filter<T> {
  ok: IfHasRaw<
    this,
    'input',
    AllVariantsAreRaw<T, K, RawField<this, 'input'>>,
    boolean
  >;
}

export type AllVariantsAreRaw<T, K extends Filter<T>, I extends T> = (
  I extends T ? InvokeFilter<T, K, I> : never
) extends true
  ? true
  : false;
