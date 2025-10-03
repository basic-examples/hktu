import { Transformer } from '.';
import { Filter } from '../Filter';
import { InvokeFilter } from '../Filter/InvokeFilter';
import { IfHasRaw } from '../util/IfHasRaw';
import { RawField } from '../util/RawField';
import { InvokeTransformer } from './InvokeTransformer';

export interface If<
  From,
  To,
  Condition extends Filter<From>,
  True extends Transformer<From, To>,
  False extends Transformer<From, To>,
> extends Transformer<From, To> {
  output: IfHasRaw<
    this,
    'input',
    IfRaw<From, To, Condition, True, False, RawField<this, 'input'>>,
    To
  >;
}

export type IfRaw<
  From,
  To,
  Condition extends Filter<From>,
  True extends Transformer<From, To>,
  False extends Transformer<From, To>,
  Input extends From,
> = InvokeTransformer<
  From,
  To,
  InvokeFilter<From, Condition, Input> extends true ? True : False,
  Input
>;
