import { Reducer } from '.';
import { InvokeHKT } from '../util/InvokeHKT';

export type InvokeReducer<
  Kind extends Reducer<unknown, unknown>,
  AccumulatorValue extends Kind['accumulator'],
  ItemValue extends Kind['current'],
> = InvokeHKT<
  'next',
  Reducer<Kind['accumulator'], Kind['current']>,
  Kind,
  { accumulator: AccumulatorValue; current: ItemValue }
>;
