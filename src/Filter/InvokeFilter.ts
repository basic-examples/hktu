import { Filter } from '.';
import { InvokeHKT } from '../util/InvokeHKT';

export type InvokeFilter<
  Kind extends Filter<unknown>,
  InputValue extends Kind['input'],
> = InvokeHKT<'ok', Filter<Kind['input']>, Kind, { input: InputValue }>;
