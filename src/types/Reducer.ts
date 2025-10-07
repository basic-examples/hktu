export type Reducer<Item, Accumulator> = {
  accumulator: Accumulator;
  current: Item;
};
