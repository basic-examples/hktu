import { Transformer } from '.';
import { HKT } from '../HKT';

export type Transform2<
  FromType,
  ToType,
  Kind extends Transformer<FromType, ToType>,
  FromValue extends FromType,
> = HKT<
  'output',
  ToType,
  Transformer<FromType, ToType>,
  Kind,
  { input: FromValue }
>;
