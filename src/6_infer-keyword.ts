import { MinusOne } from './dont-look-here';

type InferNumberOfKMs = '10km' extends `${infer N}km` ? N : 'none';

type InferPromiseResult = Promise<string> extends Promise<infer R> ? R : 'none';

type UnwrapPromise<P> = P extends Promise<infer R> ? R : P;

type UnwrappedPromise1 = UnwrapPromise<Promise<string>>;
type UnwrappedPromise2 = UnwrapPromise<string>;
type UnwrappedPromise3 = UnwrapPromise<{ meat: string }>;
type UnwrappedPromise4 = UnwrapPromise<Promise<number[]>>;

type InferHeadOfAnArray<A> = A extends [infer H] ? H : never;

type InferedHeadOfAnArray1 = InferHeadOfAnArray<['some']>;
type InferedHeadOfAnArray2 = InferHeadOfAnArray<[string, number]>;

type InferFirstCharacterOfAString<S extends string> = never;

/** mAgIc */

const sadSplitString = 'some/const'.split('/');

/** Break */
type BreakByDelimiter<
  Base extends string,
  Delimiter extends string,
> = Base extends `${infer BEFORE}${Delimiter}${infer _}`
  ? BEFORE extends `${infer _}${Delimiter}${infer _}`
    ? never
    : Base extends `${BEFORE}${Delimiter}${infer AFTER}`
      ? [BEFORE, AFTER]
      : never
  : [Base, ''];

const some = 'some/const'.split('/');
const breakByDelimiter = <S extends string>(str: S): BreakByDelimiter<S, '/'> => str.split('/') as BreakByDelimiter<S, '/'>;

const coolSplitString = breakByDelimiter('qq/fefe');

/** Join */
export type JoinByDelimiter<
  Start,
  End,
  Delimiter extends string = '/',
> = Start extends string | number
  ? End extends string | number
    ? `${Start}${'' extends End ? '' : Delimiter}${End}`
    : never
  : never;

export {};
