import { Filter } from '.';
import { IfHasRaw } from '../util/IfHasRaw';
import { RawField } from '../util/RawField';

export interface IsAssignable<T1, T2> extends Filter<T1> {
  ok: IfHasRaw<
    this,
    'input',
    IsAssignableRaw<T1, T2, RawField<this, 'input'>>,
    boolean
  >;
}

export type IsAssignableRaw<T1, T2, Input extends T1> = Input extends T2
  ? true
  : false;
