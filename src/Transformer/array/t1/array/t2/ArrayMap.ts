import { Transformer } from '../../../..';
import { IfHasRaw } from '../../../../../util/IfHasRaw';
import { RawField } from '../../../../../util/RawField';
import { InvokeTransformer } from '../../../../InvokeTransformer';

export interface ArrayMap<Kind extends Transformer<unknown, unknown>>
  extends Transformer<Kind['input'][], Kind['output'][]> {
  output: IfHasRaw<
    this,
    'input',
    ArrayMapRaw<Kind, RawField<this, 'input'>>,
    Kind['output'][]
  >;
}

export type ArrayMapRaw<
  Kind extends Transformer<unknown, unknown>,
  List extends Kind['input'][],
> = ArrayMapRawInternal<Kind, List, []>;

type ArrayMapRawInternal<
  Kind extends Transformer<unknown, unknown>,
  List extends Kind['input'][],
  Acc extends Kind['output'][],
> = List extends [
  infer First extends Kind['input'],
  ...infer Rest extends Kind['input'][],
]
  ? ArrayMapRawInternal<Kind, Rest, [...Acc, InvokeTransformer<Kind, First>]>
  : Acc;
