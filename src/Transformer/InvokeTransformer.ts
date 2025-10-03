import { Transformer } from '.';
import { InvokeHKT } from '../util/InvokeHKT';

export type InvokeTransformer<
  FromType,
  ToType,
  Kind extends Transformer<FromType, ToType>,
  FromValue extends FromType,
> = InvokeHKT<
  'output',
  ToType,
  Transformer<FromType, ToType>,
  Kind,
  { input: FromValue }
>;
