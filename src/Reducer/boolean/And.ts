import { Reducer } from '..';
import { IfHasRaw } from '../../util/IfHasRaw';
import { RawField } from '../../util/RawField';

export interface And extends Reducer<boolean, boolean> {
  next: IfHasRaw<
    this,
    'accumulator',
    AndRaw<RawField<this, 'accumulator'>, RawField<this, 'current'>>,
    boolean
  >;
}

export type AndRaw<A extends boolean, B extends boolean> = A extends true
  ? B extends true
    ? true
    : false
  : false;
