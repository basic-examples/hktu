import { Transformer } from './Transformer';
import { InvokeTransformer } from './Transformer/InvokeTransformer';

export type Pipe<
  Value extends T1['input'],
  T1 extends Transformer<unknown, unknown>,
> = InvokeTransformer<T1, Value>;

export type Pipe2<
  Value extends T1['input'],
  T1 extends Transformer<unknown, unknown>,
  T2 extends Transformer<T1['output'], unknown>,
> = InvokeTransformer<T2, Pipe<Value, T1>>;

export type Pipe3<
  Value extends T1['input'],
  T1 extends Transformer<unknown, unknown>,
  T2 extends Transformer<T1['output'], unknown>,
  T3 extends Transformer<T2['output'], unknown>,
> = InvokeTransformer<T3, Pipe2<Value, T1, T2>>;

export type Pipe4<
  Value extends T1['input'],
  T1 extends Transformer<unknown, unknown>,
  T2 extends Transformer<T1['output'], unknown>,
  T3 extends Transformer<T2['output'], unknown>,
  T4 extends Transformer<T3['output'], unknown>,
> = InvokeTransformer<T4, Pipe3<Value, T1, T2, T3>>;

export type Pipe5<
  Value extends T1['input'],
  T1 extends Transformer<unknown, unknown>,
  T2 extends Transformer<T1['output'], unknown>,
  T3 extends Transformer<T2['output'], unknown>,
  T4 extends Transformer<T3['output'], unknown>,
  T5 extends Transformer<T4['output'], unknown>,
> = InvokeTransformer<T5, Pipe4<Value, T1, T2, T3, T4>>;

export type Pipe6<
  Value extends T1['input'],
  T1 extends Transformer<unknown, unknown>,
  T2 extends Transformer<T1['output'], unknown>,
  T3 extends Transformer<T2['output'], unknown>,
  T4 extends Transformer<T3['output'], unknown>,
  T5 extends Transformer<T4['output'], unknown>,
  T6 extends Transformer<T5['output'], unknown>,
> = InvokeTransformer<T6, Pipe5<Value, T1, T2, T3, T4, T5>>;

export type Pipe7<
  Value extends T1['input'],
  T1 extends Transformer<unknown, unknown>,
  T2 extends Transformer<T1['output'], unknown>,
  T3 extends Transformer<T2['output'], unknown>,
  T4 extends Transformer<T3['output'], unknown>,
  T5 extends Transformer<T4['output'], unknown>,
  T6 extends Transformer<T5['output'], unknown>,
  T7 extends Transformer<T6['output'], unknown>,
> = InvokeTransformer<T7, Pipe6<Value, T1, T2, T3, T4, T5, T6>>;

export type Pipe8<
  Value extends T1['input'],
  T1 extends Transformer<unknown, unknown>,
  T2 extends Transformer<T1['output'], unknown>,
  T3 extends Transformer<T2['output'], unknown>,
  T4 extends Transformer<T3['output'], unknown>,
  T5 extends Transformer<T4['output'], unknown>,
  T6 extends Transformer<T5['output'], unknown>,
  T7 extends Transformer<T6['output'], unknown>,
  T8 extends Transformer<T7['output'], unknown>,
> = InvokeTransformer<T8, Pipe7<Value, T1, T2, T3, T4, T5, T6, T7>>;

export type Pipe9<
  Value extends T1['input'],
  T1 extends Transformer<unknown, unknown>,
  T2 extends Transformer<T1['output'], unknown>,
  T3 extends Transformer<T2['output'], unknown>,
  T4 extends Transformer<T3['output'], unknown>,
  T5 extends Transformer<T4['output'], unknown>,
  T6 extends Transformer<T5['output'], unknown>,
  T7 extends Transformer<T6['output'], unknown>,
  T8 extends Transformer<T7['output'], unknown>,
  T9 extends Transformer<T8['output'], unknown>,
> = InvokeTransformer<T9, Pipe8<Value, T1, T2, T3, T4, T5, T6, T7, T8>>;

export type Pipe10<
  Value extends T1['input'],
  T1 extends Transformer<unknown, unknown>,
  T2 extends Transformer<T1['output'], unknown>,
  T3 extends Transformer<T2['output'], unknown>,
  T4 extends Transformer<T3['output'], unknown>,
  T5 extends Transformer<T4['output'], unknown>,
  T6 extends Transformer<T5['output'], unknown>,
  T7 extends Transformer<T6['output'], unknown>,
  T8 extends Transformer<T7['output'], unknown>,
  T9 extends Transformer<T8['output'], unknown>,
  T10 extends Transformer<T9['output'], unknown>,
> = InvokeTransformer<T10, Pipe9<Value, T1, T2, T3, T4, T5, T6, T7, T8, T9>>;

export type Pipe11<
  Value extends T1['input'],
  T1 extends Transformer<unknown, unknown>,
  T2 extends Transformer<T1['output'], unknown>,
  T3 extends Transformer<T2['output'], unknown>,
  T4 extends Transformer<T3['output'], unknown>,
  T5 extends Transformer<T4['output'], unknown>,
  T6 extends Transformer<T5['output'], unknown>,
  T7 extends Transformer<T6['output'], unknown>,
  T8 extends Transformer<T7['output'], unknown>,
  T9 extends Transformer<T8['output'], unknown>,
  T10 extends Transformer<T9['output'], unknown>,
  T11 extends Transformer<T10['output'], unknown>,
> = InvokeTransformer<
  T11,
  Pipe10<Value, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>
>;

export type Pipe12<
  Value extends T1['input'],
  T1 extends Transformer<unknown, unknown>,
  T2 extends Transformer<T1['output'], unknown>,
  T3 extends Transformer<T2['output'], unknown>,
  T4 extends Transformer<T3['output'], unknown>,
  T5 extends Transformer<T4['output'], unknown>,
  T6 extends Transformer<T5['output'], unknown>,
  T7 extends Transformer<T6['output'], unknown>,
  T8 extends Transformer<T7['output'], unknown>,
  T9 extends Transformer<T8['output'], unknown>,
  T10 extends Transformer<T9['output'], unknown>,
  T11 extends Transformer<T10['output'], unknown>,
  T12 extends Transformer<T11['output'], unknown>,
> = InvokeTransformer<
  T12,
  Pipe11<Value, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11>
>;

export type Pipe13<
  Value extends T1['input'],
  T1 extends Transformer<unknown, unknown>,
  T2 extends Transformer<T1['output'], unknown>,
  T3 extends Transformer<T2['output'], unknown>,
  T4 extends Transformer<T3['output'], unknown>,
  T5 extends Transformer<T4['output'], unknown>,
  T6 extends Transformer<T5['output'], unknown>,
  T7 extends Transformer<T6['output'], unknown>,
  T8 extends Transformer<T7['output'], unknown>,
  T9 extends Transformer<T8['output'], unknown>,
  T10 extends Transformer<T9['output'], unknown>,
  T11 extends Transformer<T10['output'], unknown>,
  T12 extends Transformer<T11['output'], unknown>,
  T13 extends Transformer<T12['output'], unknown>,
> = InvokeTransformer<
  T13,
  Pipe12<Value, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12>
>;

export type Pipe14<
  Value extends T1['input'],
  T1 extends Transformer<unknown, unknown>,
  T2 extends Transformer<T1['output'], unknown>,
  T3 extends Transformer<T2['output'], unknown>,
  T4 extends Transformer<T3['output'], unknown>,
  T5 extends Transformer<T4['output'], unknown>,
  T6 extends Transformer<T5['output'], unknown>,
  T7 extends Transformer<T6['output'], unknown>,
  T8 extends Transformer<T7['output'], unknown>,
  T9 extends Transformer<T8['output'], unknown>,
  T10 extends Transformer<T9['output'], unknown>,
  T11 extends Transformer<T10['output'], unknown>,
  T12 extends Transformer<T11['output'], unknown>,
  T13 extends Transformer<T12['output'], unknown>,
  T14 extends Transformer<T13['output'], unknown>,
> = InvokeTransformer<
  T14,
  Pipe13<Value, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13>
>;

export type Pipe15<
  Value extends T1['input'],
  T1 extends Transformer<unknown, unknown>,
  T2 extends Transformer<T1['output'], unknown>,
  T3 extends Transformer<T2['output'], unknown>,
  T4 extends Transformer<T3['output'], unknown>,
  T5 extends Transformer<T4['output'], unknown>,
  T6 extends Transformer<T5['output'], unknown>,
  T7 extends Transformer<T6['output'], unknown>,
  T8 extends Transformer<T7['output'], unknown>,
  T9 extends Transformer<T8['output'], unknown>,
  T10 extends Transformer<T9['output'], unknown>,
  T11 extends Transformer<T10['output'], unknown>,
  T12 extends Transformer<T11['output'], unknown>,
  T13 extends Transformer<T12['output'], unknown>,
  T14 extends Transformer<T13['output'], unknown>,
  T15 extends Transformer<T14['output'], unknown>,
> = InvokeTransformer<
  T15,
  Pipe14<Value, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14>
>;
