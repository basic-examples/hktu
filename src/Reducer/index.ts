export interface Reducer<T, U> {
  accumulator: T;
  current: U;
  next: T;
}
