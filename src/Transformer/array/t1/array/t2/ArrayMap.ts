import { Transformer } from '../../../..';
import { IfHasRaw } from '../../../../../util/IfHasRaw';
import { RawField } from '../../../../../util/RawField';
import { InvokeTransformer } from '../../../../InvokeTransformer';

export interface ArrayMap<From, To, Kind extends Transformer<From, To>>
  extends Transformer<From[], To[]> {
  output: IfHasRaw<
    this,
    'input',
    ArrayMapRaw<From, To, Kind, RawField<this, 'input'>>,
    To[]
  >;
}

export type ArrayMapRaw<
  From,
  To,
  Kind extends Transformer<From, To>,
  List extends From[],
> = ArrayMapRawInternal<From, To, Kind, List, []>;

type ArrayMapRawInternal<
  From,
  To,
  Kind extends Transformer<From, To>,
  List extends From[],
  Acc extends To[],
> = List extends [infer First extends From, ...infer Rest extends From[]]
  ? ArrayMapRawInternal<
      From,
      To,
      Kind,
      Rest,
      [...Acc, InvokeTransformer<From, To, Kind, First>]
    >
  : Acc;
