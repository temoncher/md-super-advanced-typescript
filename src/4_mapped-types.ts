/* eslint-disable @typescript-eslint/consistent-indexed-object-style */

/** Indexed types */
type Dictionary<T> = {
  [key: string]: T;
};

const dict: Dictionary<string> = {
  some: 'qf',
  foo: 'bar',
  error: 12,
};

/** Mapped types */
type NarrowDictionary<K extends string, T> = {
  [key in K]: T;
};

const narrowDictionary: NarrowDictionary<'foo' | 'bar', string> = {
  foo: 'som',
  bar: '12',
};

const record: Record<'q' | 'qq', number> = {
  q: 12,
  qq: 13,
};

/** Number clone example */

type NumberClone<T> = {
  [K in keyof T]: number;
};

type Burger = {
  name: string;
  meat: string;
  numberOfSlices: number;
};

const numberBurger: NumberClone<Burger> = {
  name: 12,
  meat: 34,
  numberOfSlices: 33,
};

/** Property name clone example */

type PropertyNameClone<T> = {
  [K in keyof T]: K;
};

const propNameBurger: PropertyNameClone<Burger> = {
  name: 'name',
  meat: 'meat',
  numberOfSlices: 'numberOfSlices',
};

/** Custom Pick example */

type CustomPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

const pickedBurger: CustomPick<Burger, 'name' | 'meat'> = {
  name: 'classic',
  meat: '🥩',
};

export {};
