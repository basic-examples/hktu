import { Transformer } from '../../..';
import { Reducer } from '../../../../Reducer';
import { InvokeReducer } from '../../../../Reducer/InvokeReducer';
import { HandleNever } from '../../../../util/HandleNever';
import { IfHasRaw } from '../../../../util/IfHasRaw';
import { RawField } from '../../../../util/RawField';

export interface ArrayReduce<
  Kind extends Reducer<unknown, unknown>,
  InitialValue extends Kind['accumulator'],
> extends Transformer<Kind['current'][], Kind['accumulator']> {
  output: IfHasRaw<
    this,
    'input',
    ArrayReduceRaw<Kind, InitialValue, RawField<this, 'input'>>,
    Kind['accumulator']
  >;
}

export type ArrayReduceRaw<
  Kind extends Reducer<unknown, unknown>,
  InitialValue extends Kind['accumulator'],
  List extends Kind['current'][],
> = ArrayReduceRawInternal<Kind, InitialValue, List>;

type ArrayReduceRawInternal<
  Kind extends Reducer<unknown, unknown>,
  InitialValue extends Kind['accumulator'],
  List extends Kind['current'][],
> = List extends [
  infer First extends Kind['current'],
  ...infer Rest extends Kind['current'][],
]
  ? ArrayReduceRawInternal<
      Kind,
      InvokeReducer<Kind, InitialValue, HandleNever<First, List[0]>>,
      Rest
    >
  : InitialValue;
