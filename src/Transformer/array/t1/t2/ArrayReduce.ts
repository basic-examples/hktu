import { Transformer } from '../../..';
import { Reducer } from '../../../../Reducer';
import { InvokeReducer } from '../../../../Reducer/InvokeReducer';
import { IfHasRaw } from '../../../../util/IfHasRaw';
import { RawField } from '../../../../util/RawField';

export interface ArrayReduce<
  AccumulatorType,
  ItemType,
  Kind extends Reducer<AccumulatorType, ItemType>,
  InitialValue extends AccumulatorType,
> extends Transformer<ItemType[], AccumulatorType> {
  output: IfHasRaw<
    this,
    'input',
    ArrayReduceRaw<
      AccumulatorType,
      ItemType,
      Kind,
      InitialValue,
      RawField<this, 'input'>
    >,
    AccumulatorType
  >;
}

export type ArrayReduceRaw<
  AccumulatorType,
  ItemType,
  Kind extends Reducer<AccumulatorType, ItemType>,
  InitialValue extends AccumulatorType,
  List extends ItemType[],
> = ArrayReduceRawInternal<AccumulatorType, ItemType, Kind, InitialValue, List>;

type ArrayReduceRawInternal<
  AccumulatorType,
  ItemType,
  Kind extends Reducer<AccumulatorType, ItemType>,
  InitialValue extends AccumulatorType,
  List extends ItemType[],
> = List extends [
  infer First extends ItemType,
  ...infer Rest extends ItemType[],
]
  ? ArrayReduceRawInternal<
      AccumulatorType,
      ItemType,
      Kind,
      InvokeReducer<AccumulatorType, ItemType, Kind, InitialValue, First>,
      Rest
    >
  : InitialValue;
