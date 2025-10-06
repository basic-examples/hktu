import { Transformer } from '.';
import { InvokeHKT } from '../util/InvokeHKT';

export type InvokeTransformer<
  Kind extends Transformer<unknown, unknown>,
  FromValue extends Kind['input'],
> = InvokeHKT<
  'output',
  Transformer<Kind['input'], Kind['output']>,
  Kind,
  { input: FromValue }
>;
