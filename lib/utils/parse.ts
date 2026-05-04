import type { Void } from 'lib/aliases';
import type { IsNegative, IsNullish, IsPositive } from 'lib/assertions';

/**
 * Parses a `string` or `number` type into a `number`.
 *
 * @template T The type to parse.
 * @returns The parsed `number` type.
 * @example
 * type Int = ParseInt<'11'>; // 11
 */
export type ParseInt<T> = T extends number
  ? `${T}` extends `${infer Int extends number}.${number}`
    ? Int
    : T
  : T extends '-0' | '-0n' | `${'-' | ''}.${number}`
    ? 0
    : T extends `${infer U extends number}`
      ? number extends U
        ? T extends `${infer U extends number}.${number | ''}`
          ? U
          : never
        : `${U}` extends `${infer Int extends number}.${number}`
          ? Int
          : U
      : T extends `${infer U extends bigint}n`
        ? `${U}` extends `${infer V extends number}`
          ? V
          : never
        : T extends bigint
          ? ParseInt<`${T}`>
          : never;

/**
 * Parses a `string` or `number` type into a negative `number`.
 *
 * @template T The type to parse.
 * @returns The parsed negative `number` type.
 * @example
 * type Int = ParseIntNegative<'11'>; // -11
 */
export type ParseIntNegative<T> =
  ParseInt<T> extends infer Int
    ? Int extends 0
      ? 0
      : Int extends number
        ? IsNegative<Int> extends true
          ? Int
          : `-${Int}` extends `${infer Result extends number}`
            ? Result
            : never
        : never
    : never;

/**
 * Parses a `string` or `number` type into a positive `number`.
 *
 * @template T The type to parse.
 * @returns The parsed positive `number` type.
 * @example
 * type Int = ParseIntPositive<'-11'>; // 11
 */
export type ParseIntPositive<T> =
  ParseInt<T> extends infer Int
    ? Int extends 0
      ? 0
      : Int extends number
        ? IsPositive<Int> extends true
          ? Int
          : `${Int}` extends `-${infer Result extends number}`
            ? Result
            : never
        : never
    : never;

/**
 * Parses a `string` or `number` type into a `number`.
 *
 * @template T The type to parse.
 * @returns The parsed `number` type.
 * @example
 * type Float = ParseFloat<'11.1'>; // 11.1
 */
export type ParseFloat<T> = T extends number
  ? T
  : T extends '-0' | '-0n'
    ? 0
    : T extends `${infer Prefix extends '-' | ''}.${infer U extends number}`
      ? ParseFloat<`${Prefix}0.${U}`>
      : T extends `${infer U extends number}`
        ? number extends U
          ? T extends `${infer U extends number}.${number | ''}`
            ? U
            : never
          : U
        : T extends `${infer U extends bigint}n`
          ? `${U}` extends `${infer V extends number}`
            ? V
            : never
          : T extends bigint
            ? ParseFloat<`${T}`>
            : never;

/**
 * Parses a `string` or `number` type into a negative `number`.
 *
 * @template T The type to parse.
 * @returns The parsed negative `number` type.
 * @example
 * type Float = ParseFloatNegative<'11.1'>; // -11.1
 */
export type ParseFloatNegative<T> =
  ParseFloat<T> extends infer Float
    ? Float extends 0
      ? 0
      : Float extends number
        ? IsNegative<Float> extends true
          ? Float
          : `-${Float}` extends `${infer Result extends number}`
            ? Result
            : never
        : never
    : never;

/**
 * Parses a `string` or `number` type into a positive `number`.
 *
 * @template T The type to parse.
 * @returns The parsed positive `number` type.
 * @example
 * type Float = ParseFloatPositive<'-11.1'>; // 11.1
 */
export type ParseFloatPositive<T> =
  ParseFloat<T> extends infer Float
    ? Float extends 0
      ? 0
      : Float extends number
        ? IsPositive<Float> extends true
          ? Float
          : `${Float}` extends `-${infer Result extends number}`
            ? Result
            : never
        : never
    : never;

/**
 * Parses a `string` or `number` type into a `bigint`.
 *
 * @template T The type to parse.
 * @returns The parsed `bigint` type.
 * @example
 * type Bigi = ParseBigInt<'11n'>; // 11n
 */
export type ParseBigInt<T> = T extends bigint
  ? T
  : T extends '-0' | '-0n'
    ? 0
    : T extends `${infer U extends bigint}`
      ? U
      : T extends `${infer U extends bigint}n`
        ? U
        : T extends number
          ? ParseBigInt<`${T}`>
          : never;

/**
 * Parses a `string` or `number` type into a negative `bigint`.
 *
 * @template T The type to parse.
 * @returns The parsed negative `bigint` type.
 * @example
 * type Bigi = ParseBigIntNegative<'11'>; // -11n
 */
export type ParseBigIntNegative<T> =
  ParseBigInt<T> extends infer Bigi
    ? Bigi extends 0n
      ? 0n
      : Bigi extends bigint
        ? IsNegative<Bigi> extends true
          ? Bigi
          : `-${Bigi}` extends `${infer Result extends bigint}`
            ? Result
            : never
        : never
    : never;

/**
 * Parses a `string` or `number` type into a positive `bigint`.
 *
 * @template T The type to parse.
 * @returns The parsed positive `bigint` type.
 * @example
 * type Bigi = ParseBigIntPositive<'-11'>; // 11n
 */
export type ParseBigIntPositive<T> =
  ParseBigInt<T> extends infer Bigi
    ? Bigi extends 0n
      ? 0n
      : Bigi extends bigint
        ? IsPositive<Bigi> extends true
          ? Bigi
          : `${Bigi}` extends `-${infer Result extends bigint}`
            ? Result
            : never
        : never
    : never;

/**
 * Converts a type to a `string`.
 *
 * @template T The type to convert.
 * @returns The `string` representation of the type.
 * @example
 * type Stringified = ParseString<11>; // '11'
 */
export type ParseString<T> = T extends string
  ? T
  : T extends string | number | boolean | null | undefined
    ? `${T}`
    : T extends bigint
      ? `${T}n`
      : never;

/**
 * Converts a type to a `boolean`.
 *
 * @template T The type to convert.
 * @returns The `boolean` representation of the type.
 * @example
 * type True1 = ParseBoolean<'true'>; // true
 * type True2 = ParseBoolean<1>; // true
 * type False1 = ParseBoolean<'false'>; // false
 * type False2 = ParseBoolean<0>; // false
 */
export type ParseBoolean<T> = T extends boolean
  ? T
  : T extends 0 | -0 | 0n | -0n | '' | null | undefined | Void
    ? false
    : T extends 1
      ? true
      : T extends `${infer U extends boolean}`
        ? U
        : never;

/**
 * Converts a type to an `object`.
 *
 * @template T The type to be converted into an `object`.
 * @returns A new `object` of `T`, it returns `never` if `T` is nullish.
 * @example
 * type Obj = ParseObject<true>; // { valueOf: () => boolean }
 */
export type ParseObject<T> = T extends T
  ? IsNullish<T> extends true
    ? never
    : Record<keyof T, unknown> extends infer U
      ? {
          [K in keyof U]: T[K extends keyof T ? K : never];
        }
      : never
  : never;
