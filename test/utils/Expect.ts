import { RecursiveArray } from './RecursiveArray';

export type Expect<T extends RecursiveArray<true>> = T;
