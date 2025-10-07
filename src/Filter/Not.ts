import { Filter } from '.';
import { IfHasRaw } from '../util/IfHasRaw';
import { RawField } from '../util/RawField';
import { InvokeFilter } from './InvokeFilter';

export interface Not<F extends Filter<unknown>> extends Filter<F['input']> {
  ok: IfHasRaw<this, 'input', NotRaw<F, RawField<this, 'input'>>, boolean>;
}

export type NotRaw<
  F extends Filter<unknown>,
  Input extends F['input'],
> = InvokeFilter<F, Input> extends true ? false : true;
