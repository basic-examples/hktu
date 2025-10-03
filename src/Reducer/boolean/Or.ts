import { Reducer } from '..';
import { IfHasRaw } from '../../util/IfHasRaw';
import { RawField } from '../../util/RawField';

export interface Or extends Reducer<boolean, boolean> {
  next: IfHasRaw<
    this,
    'accumulator',
    OrRaw<RawField<this, 'accumulator'>, RawField<this, 'current'>>,
    boolean
  >;
}

export type OrRaw<A extends boolean, B extends boolean> = A extends true
  ? true
  : B extends true
  ? true
  : false;
