import { Reducer } from '.';
import { InvokeHKT } from '../util/InvokeHKT';

export type InvokeReducer<
  AccumulatorType,
  ItemType,
  Kind extends Reducer<AccumulatorType, ItemType>,
  AccumulatorValue extends AccumulatorType,
  ItemValue extends ItemType,
> = InvokeHKT<
  'next',
  AccumulatorType,
  Reducer<AccumulatorType, ItemType>,
  Kind,
  { accumulator: AccumulatorValue; current: ItemValue }
>;
