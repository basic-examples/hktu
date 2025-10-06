import { Pipe2 } from './Pipe';
import { Transformer } from './Transformer';
import { IfHasRaw } from './util/IfHasRaw';
import { RawField } from './util/RawField';

export interface Compose<
  K1 extends Transformer<unknown, unknown>,
  K2 extends Transformer<K1['output'], unknown>,
> extends Transformer<K1['input'], K2['output']> {
  output: IfHasRaw<
    this,
    'input',
    ComposeRaw<K1, K2, RawField<this, 'input'>>,
    K2['output']
  >;
}

export type ComposeRaw<
  K1 extends Transformer<unknown, unknown>,
  K2 extends Transformer<K1['output'], unknown>,
  Input extends K1['input'],
> = Pipe2<Input, K1, K2>;

export type Compose2<
  K1 extends Transformer<unknown, unknown>,
  K2 extends Transformer<K1['output'], unknown>,
> = Compose<K1, K2>;

export type Compose3<
  K1 extends Transformer<unknown, unknown>,
  K2 extends Transformer<K1['output'], unknown>,
  K3 extends Transformer<K2['output'], unknown>,
> = Compose<Compose2<K1, K2>, K3>;

export type Compose4<
  K1 extends Transformer<unknown, unknown>,
  K2 extends Transformer<K1['output'], unknown>,
  K3 extends Transformer<K2['output'], unknown>,
  K4 extends Transformer<K3['output'], unknown>,
> = Compose<Compose3<K1, K2, K3>, K4>;

export type Compose5<
  K1 extends Transformer<unknown, unknown>,
  K2 extends Transformer<K1['output'], unknown>,
  K3 extends Transformer<K2['output'], unknown>,
  K4 extends Transformer<K3['output'], unknown>,
  K5 extends Transformer<K4['output'], unknown>,
> = Compose<Compose4<K1, K2, K3, K4>, K5>;

export type Compose6<
  K1 extends Transformer<unknown, unknown>,
  K2 extends Transformer<K1['output'], unknown>,
  K3 extends Transformer<K2['output'], unknown>,
  K4 extends Transformer<K3['output'], unknown>,
  K5 extends Transformer<K4['output'], unknown>,
  K6 extends Transformer<K5['output'], unknown>,
> = Compose<Compose5<K1, K2, K3, K4, K5>, K6>;

export type Compose7<
  K1 extends Transformer<unknown, unknown>,
  K2 extends Transformer<K1['output'], unknown>,
  K3 extends Transformer<K2['output'], unknown>,
  K4 extends Transformer<K3['output'], unknown>,
  K5 extends Transformer<K4['output'], unknown>,
  K6 extends Transformer<K5['output'], unknown>,
  K7 extends Transformer<K6['output'], unknown>,
> = Compose<Compose6<K1, K2, K3, K4, K5, K6>, K7>;

export type Compose8<
  K1 extends Transformer<unknown, unknown>,
  K2 extends Transformer<K1['output'], unknown>,
  K3 extends Transformer<K2['output'], unknown>,
  K4 extends Transformer<K3['output'], unknown>,
  K5 extends Transformer<K4['output'], unknown>,
  K6 extends Transformer<K5['output'], unknown>,
  K7 extends Transformer<K6['output'], unknown>,
  K8 extends Transformer<K7['output'], unknown>,
> = Compose<Compose7<K1, K2, K3, K4, K5, K6, K7>, K8>;

export type Compose9<
  K1 extends Transformer<unknown, unknown>,
  K2 extends Transformer<K1['output'], unknown>,
  K3 extends Transformer<K2['output'], unknown>,
  K4 extends Transformer<K3['output'], unknown>,
  K5 extends Transformer<K4['output'], unknown>,
  K6 extends Transformer<K5['output'], unknown>,
  K7 extends Transformer<K6['output'], unknown>,
  K8 extends Transformer<K7['output'], unknown>,
  K9 extends Transformer<K8['output'], unknown>,
> = Compose<Compose8<K1, K2, K3, K4, K5, K6, K7, K8>, K9>;

export type Compose10<
  K1 extends Transformer<unknown, unknown>,
  K2 extends Transformer<K1['output'], unknown>,
  K3 extends Transformer<K2['output'], unknown>,
  K4 extends Transformer<K3['output'], unknown>,
  K5 extends Transformer<K4['output'], unknown>,
  K6 extends Transformer<K5['output'], unknown>,
  K7 extends Transformer<K6['output'], unknown>,
  K8 extends Transformer<K7['output'], unknown>,
  K9 extends Transformer<K8['output'], unknown>,
  K10 extends Transformer<K9['output'], unknown>,
> = Compose<Compose9<K1, K2, K3, K4, K5, K6, K7, K8, K9>, K10>;

export type Compose11<
  K1 extends Transformer<unknown, unknown>,
  K2 extends Transformer<K1['output'], unknown>,
  K3 extends Transformer<K2['output'], unknown>,
  K4 extends Transformer<K3['output'], unknown>,
  K5 extends Transformer<K4['output'], unknown>,
  K6 extends Transformer<K5['output'], unknown>,
  K7 extends Transformer<K6['output'], unknown>,
  K8 extends Transformer<K7['output'], unknown>,
  K9 extends Transformer<K8['output'], unknown>,
  K10 extends Transformer<K9['output'], unknown>,
  K11 extends Transformer<K10['output'], unknown>,
> = Compose<Compose10<K1, K2, K3, K4, K5, K6, K7, K8, K9, K10>, K11>;

export type Compose12<
  K1 extends Transformer<unknown, unknown>,
  K2 extends Transformer<K1['output'], unknown>,
  K3 extends Transformer<K2['output'], unknown>,
  K4 extends Transformer<K3['output'], unknown>,
  K5 extends Transformer<K4['output'], unknown>,
  K6 extends Transformer<K5['output'], unknown>,
  K7 extends Transformer<K6['output'], unknown>,
  K8 extends Transformer<K7['output'], unknown>,
  K9 extends Transformer<K8['output'], unknown>,
  K10 extends Transformer<K9['output'], unknown>,
  K11 extends Transformer<K10['output'], unknown>,
  K12 extends Transformer<K11['output'], unknown>,
> = Compose<Compose11<K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11>, K12>;

export type Compose13<
  K1 extends Transformer<unknown, unknown>,
  K2 extends Transformer<K1['output'], unknown>,
  K3 extends Transformer<K2['output'], unknown>,
  K4 extends Transformer<K3['output'], unknown>,
  K5 extends Transformer<K4['output'], unknown>,
  K6 extends Transformer<K5['output'], unknown>,
  K7 extends Transformer<K6['output'], unknown>,
  K8 extends Transformer<K7['output'], unknown>,
  K9 extends Transformer<K8['output'], unknown>,
  K10 extends Transformer<K9['output'], unknown>,
  K11 extends Transformer<K10['output'], unknown>,
  K12 extends Transformer<K11['output'], unknown>,
  K13 extends Transformer<K12['output'], unknown>,
> = Compose<Compose12<K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12>, K13>;
