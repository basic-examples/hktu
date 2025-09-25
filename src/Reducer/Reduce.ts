import { Reducer } from '.';
import { HKT } from '../HKT';

export type Reduce<
  AccumulatorType,
  ItemType,
  Kind extends Reducer<AccumulatorType, ItemType>,
  AccumulatorValue extends AccumulatorType,
  ItemValue extends ItemType,
> = HKT<
  'next',
  AccumulatorType,
  Reducer<AccumulatorType, ItemType>,
  Kind,
  { accumulator: AccumulatorValue; current: ItemValue }
>;
