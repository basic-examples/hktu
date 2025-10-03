import { Filter } from '.';
import { InvokeHKT } from '../util/InvokeHKT';

export type InvokeFilter<
  InputType,
  Kind extends Filter<InputType>,
  InputValue extends InputType,
> = InvokeHKT<'ok', boolean, Filter<InputType>, Kind, { input: InputValue }>;
