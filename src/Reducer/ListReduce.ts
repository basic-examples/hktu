import { Reducer } from '.';
import { Reduce } from './Reduce';

export type ListReduce<
  AccumulatorType,
  ItemType,
  Kind extends Reducer<AccumulatorType, ItemType>,
  InitialValue extends AccumulatorType,
  List extends ItemType[],
> = ListReduceInternal<AccumulatorType, ItemType, Kind, InitialValue, List>;

export type ListReduceInternal<
  AccumulatorType,
  ItemType,
  Kind extends Reducer<AccumulatorType, ItemType>,
  InitialValue extends AccumulatorType,
  List extends ItemType[],
> = List extends [
  infer First extends ItemType,
  ...infer Rest extends ItemType[],
]
  ? ListReduceInternal<
      AccumulatorType,
      ItemType,
      Kind,
      Reduce<AccumulatorType, ItemType, Kind, InitialValue, First>,
      Rest
    >
  : InitialValue;
