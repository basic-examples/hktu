import { Reducer } from '..';

export interface Or extends Reducer<boolean, boolean> {
  validationResult: OrRaw<this['accumulator'], this['current']>;
}

export type OrRaw<A extends boolean, B extends boolean> = A extends true
  ? true
  : B extends true
    ? true
    : false;
