export interface OptionBase<T> {
  t: T;
}

export interface OptionSome<V extends T, T> extends OptionBase<T> {
  some: true;
  value: V;
}

export interface OptionNone<T> extends OptionBase<T> {
  some: false;
}

export type Option<T> = OptionSome<T, T> | OptionNone<T>;
