import { Filter } from '.';
import { Transformer } from '../Transformer';
import { InvokeTransformer } from '../Transformer/InvokeTransformer';
import { IfHasRaw } from '../util/IfHasRaw';
import { RawField } from '../util/RawField';
import { InvokeFilter } from './InvokeFilter';

export interface FilterTransformed<
  T extends Transformer<unknown, unknown>,
  F extends Filter<T['output']>,
> extends Filter<T['input']> {
  ok: IfHasRaw<
    this,
    'input',
    FilterTransformedRaw<T, F, RawField<this, 'input'>>,
    boolean
  >;
}

export type FilterTransformedRaw<
  T extends Transformer<unknown, unknown>,
  F extends Filter<T['output']>,
  Input extends T['input'],
> = InvokeFilter<F, InvokeTransformer<T, Input>>;
