import { Transformer } from './Transformer';
import { InvokeTransformer } from './Transformer/InvokeTransformer';

export type Pipe<
  Type,
  Value extends Type,
  T1 extends Transformer<Type, unknown>,
> = InvokeTransformer<Type, T1['output'], T1, Value>;

export type Pipe2<
  Type,
  Value extends Type,
  T1 extends Transformer<Type, unknown>,
  T2 extends Transformer<T1['output'], unknown>,
> = InvokeTransformer<T1['output'], T2['output'], T2, Pipe<Type, Value, T1>>;

export type Pipe3<
  Type,
  Value extends Type,
  T1 extends Transformer<Type, unknown>,
  T2 extends Transformer<T1['output'], unknown>,
  T3 extends Transformer<T2['output'], unknown>,
> = InvokeTransformer<
  T2['output'],
  T3['output'],
  T3,
  Pipe2<Type, Value, T1, T2>
>;

export type Pipe4<
  Type,
  Value extends Type,
  T1 extends Transformer<Type, unknown>,
  T2 extends Transformer<T1['output'], unknown>,
  T3 extends Transformer<T2['output'], unknown>,
  T4 extends Transformer<T3['output'], unknown>,
> = InvokeTransformer<
  T3['output'],
  T4['output'],
  T4,
  Pipe3<Type, Value, T1, T2, T3>
>;

export type Pipe5<
  Type,
  Value extends Type,
  T1 extends Transformer<Type, unknown>,
  T2 extends Transformer<T1['output'], unknown>,
  T3 extends Transformer<T2['output'], unknown>,
  T4 extends Transformer<T3['output'], unknown>,
  T5 extends Transformer<T4['output'], unknown>,
> = InvokeTransformer<
  T4['output'],
  T5['output'],
  T5,
  Pipe4<Type, Value, T1, T2, T3, T4>
>;

export type Pipe6<
  Type,
  Value extends Type,
  T1 extends Transformer<Type, unknown>,
  T2 extends Transformer<T1['output'], unknown>,
  T3 extends Transformer<T2['output'], unknown>,
  T4 extends Transformer<T3['output'], unknown>,
  T5 extends Transformer<T4['output'], unknown>,
  T6 extends Transformer<T5['output'], unknown>,
> = InvokeTransformer<
  T5['output'],
  T6['output'],
  T6,
  Pipe5<Type, Value, T1, T2, T3, T4, T5>
>;

export type Pipe7<
  Type,
  Value extends Type,
  T1 extends Transformer<Type, unknown>,
  T2 extends Transformer<T1['output'], unknown>,
  T3 extends Transformer<T2['output'], unknown>,
  T4 extends Transformer<T3['output'], unknown>,
  T5 extends Transformer<T4['output'], unknown>,
  T6 extends Transformer<T5['output'], unknown>,
  T7 extends Transformer<T6['output'], unknown>,
> = InvokeTransformer<
  T6['output'],
  T7['output'],
  T7,
  Pipe6<Type, Value, T1, T2, T3, T4, T5, T6>
>;

export type Pipe8<
  Type,
  Value extends Type,
  T1 extends Transformer<Type, unknown>,
  T2 extends Transformer<T1['output'], unknown>,
  T3 extends Transformer<T2['output'], unknown>,
  T4 extends Transformer<T3['output'], unknown>,
  T5 extends Transformer<T4['output'], unknown>,
  T6 extends Transformer<T5['output'], unknown>,
  T7 extends Transformer<T6['output'], unknown>,
  T8 extends Transformer<T7['output'], unknown>,
> = InvokeTransformer<
  T7['output'],
  T8['output'],
  T8,
  Pipe7<Type, Value, T1, T2, T3, T4, T5, T6, T7>
>;

export type Pipe9<
  Type,
  Value extends Type,
  T1 extends Transformer<Type, unknown>,
  T2 extends Transformer<T1['output'], unknown>,
  T3 extends Transformer<T2['output'], unknown>,
  T4 extends Transformer<T3['output'], unknown>,
  T5 extends Transformer<T4['output'], unknown>,
  T6 extends Transformer<T5['output'], unknown>,
  T7 extends Transformer<T6['output'], unknown>,
  T8 extends Transformer<T7['output'], unknown>,
  T9 extends Transformer<T8['output'], unknown>,
> = InvokeTransformer<
  T8['output'],
  T9['output'],
  T9,
  Pipe8<Type, Value, T1, T2, T3, T4, T5, T6, T7, T8>
>;

export type Pipe10<
  Type,
  Value extends Type,
  T1 extends Transformer<Type, unknown>,
  T2 extends Transformer<T1['output'], unknown>,
  T3 extends Transformer<T2['output'], unknown>,
  T4 extends Transformer<T3['output'], unknown>,
  T5 extends Transformer<T4['output'], unknown>,
  T6 extends Transformer<T5['output'], unknown>,
  T7 extends Transformer<T6['output'], unknown>,
  T8 extends Transformer<T7['output'], unknown>,
  T9 extends Transformer<T8['output'], unknown>,
  T10 extends Transformer<T9['output'], unknown>,
> = InvokeTransformer<
  T9['output'],
  T10['output'],
  T10,
  Pipe9<Type, Value, T1, T2, T3, T4, T5, T6, T7, T8, T9>
>;

export type Pipe11<
  Type,
  Value extends Type,
  T1 extends Transformer<Type, unknown>,
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
  T10['output'],
  T11['output'],
  T11,
  Pipe10<Type, Value, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>
>;

export type Pipe12<
  Type,
  Value extends Type,
  T1 extends Transformer<Type, unknown>,
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
  T11['output'],
  T12['output'],
  T12,
  Pipe11<Type, Value, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11>
>;

export type Pipe13<
  Type,
  Value extends Type,
  T1 extends Transformer<Type, unknown>,
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
  T12['output'],
  T13['output'],
  T13,
  Pipe12<Type, Value, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12>
>;

export type Pipe14<
  Type,
  Value extends Type,
  T1 extends Transformer<Type, unknown>,
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
  T13['output'],
  T14['output'],
  T14,
  Pipe13<Type, Value, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13>
>;
