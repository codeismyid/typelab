import type {
  ParseBigInt,
  ParseBigIntNegative,
  ParseFloat,
  ParseFloatNegative
} from '.';

/**
 * Increments a given `number` or `bigint` by 1.
 *
 * @template N The `number` or `bigint` to be incremented.
 * @returns The incremented `number` or `bigint`.
 * @example
 * type IncrementNumber = Increment<5>; // 6
 * type IncrementBigInt = Increment<10n>; // 11n
 * type IncrementNegative = Increment<-3.14>; // -2.14
 */
export type Increment<N extends number | bigint> = N extends number
  ? number extends N
    ? number
    : `${N}` extends `-${infer WholeNumber}`
      ? WholeNumber extends `0.${infer Fraction}`
        ? ParseFloat<`0.${Fraction}`>
        : ParseFloatNegative<_Decrement<WholeNumber>>
      : ParseFloat<_Increment<`${N}`>>
  : N extends bigint
    ? bigint extends N
      ? bigint
      : `${N}` extends `-${infer WholeNumber}`
        ? ParseBigIntNegative<_Decrement<WholeNumber>>
        : ParseBigInt<_Increment<`${N}`>>
    : never;

type _IncrementN = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
type _IncrementNValues = _IncrementN[number];

type _Increment<
  T extends string,
  N extends {
    int: string;
    fraction: string;
  } = T extends `${infer Int}.${infer Fraction}`
    ? { int: Int; fraction: `.${Fraction}` }
    : { int: T; fraction: '' }
> = N['int'] extends `${infer NRest}${_IncrementNValues}`
  ? N['int'] extends `${NRest}${infer NLast extends _IncrementNValues}`
    ? `${_IncrementRest<NRest, NLast, N['fraction']>}${_IncrementN[NLast]}${N['fraction']}`
    : never
  : '';

type _IncrementRest<
  NRest extends string,
  NLast extends string,
  NFraction extends string
> = NLast extends '9'
  ? NRest extends ''
    ? '1'
    : _Increment<NRest, { int: NRest; fraction: NFraction }>
  : NRest;

/**
 * Decrements a given `number` or `bigint` by 1.
 *
 * @template N The `number` or `bigint` to be decremented.
 * @returns The decremented `number` or `bigint`.
 *
 * @example
 * type DecrementNumber = Decrement<5>; // 4
 * type DecrementBigInt = Decrement<10n>; // 9n
 * type DecrementNegative = Decrement<-3.14>; // -4.14
 */
export type Decrement<N extends number | bigint> = N extends number
  ? number extends N
    ? number
    : N extends 0
      ? -1
      : `${N}` extends `-${infer WholeNumber}`
        ? ParseFloatNegative<_Increment<WholeNumber>>
        : `${N}` extends `0.${infer Fraction}`
          ? ParseFloat<`-0.${Fraction}`>
          : ParseFloat<_Decrement<`${N}`>>
  : N extends bigint
    ? bigint extends N
      ? bigint
      : N extends 0n
        ? -1n
        : `${N}` extends `-${infer WholeNumber}`
          ? ParseBigIntNegative<_Increment<WholeNumber>>
          : ParseBigInt<_Decrement<`${N}`>>
    : never;

type _DecrementN = ['9', '0', '1', '2', '3', '4', '5', '6', '7', '8'];
type _DecrementNValues = _DecrementN[number];

type _Decrement<
  T extends string,
  N extends {
    int: string;
    fraction: string;
  } = T extends `${infer Int}.${infer Fraction}`
    ? { int: Int; fraction: `.${Fraction}` }
    : { int: T; fraction: '' }
> = N['int'] extends `${infer NRest}${_DecrementNValues}`
  ? N['int'] extends `${NRest}${infer NLast extends _DecrementNValues}`
    ? `${_DecrementRest<NRest, NLast, N['fraction']>}${_DecrementN[NLast]}${N['fraction']}`
    : never
  : '';

type _DecrementRest<
  NRest extends string,
  NLast extends string,
  NFraction extends string
> = NLast extends '0'
  ? NRest extends '1'
    ? ''
    : _Decrement<NRest, { int: NRest; fraction: NFraction }>
  : NRest;
