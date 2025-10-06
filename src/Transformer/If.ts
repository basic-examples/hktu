import { Transformer } from '.';
import { Filter } from '../Filter';
import { InvokeFilter } from '../Filter/InvokeFilter';
import { IfHasRaw } from '../util/IfHasRaw';
import { RawField } from '../util/RawField';
import { InvokeTransformer } from './InvokeTransformer';

export interface If<
  Condition extends Filter<unknown>,
  True extends Transformer<Condition['input'], unknown>,
  False extends Transformer<Condition['input'], True['output']>,
> extends Transformer<Condition['input'], True['output']> {
  output: IfHasRaw<
    this,
    'input',
    IfRaw<Condition, True, False, RawField<this, 'input'>>,
    True['output']
  >;
}

export type IfRaw<
  Condition extends Filter<unknown>,
  True extends Transformer<Condition['input'], unknown>,
  False extends Transformer<Condition['input'], True['output']>,
  Input extends Condition['input'],
> = InvokeTransformer<
  InvokeFilter<Condition, Input> extends true ? True : False,
  Input
>;
