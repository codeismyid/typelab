import type { _IfNotAnyOrNever } from './__internal';

/**
 * Resolves to `Then` if the type `T` is a `bigint`, otherwise resolves to `Else`.
 *
 * @template T The type to be checked.
 * @template Then The type to return if `T` is a `bigint`.
 * @template Else The type to return if `T` is not a `bigint`. Defaults to `never`.
 * @returns `Then` if `T` is a `bigint`, `Else` otherwise.
 * @example
 * type Yes = IfBigInt<bigint, 'yes', 'no'>; // 'yes'
 * type No = IfBigInt<number, 'yes', 'no'>; // 'no'
 * type YesOrNo = IfBigInt<bigint | number, 'yes', 'no'>; // 'yes' | 'no'
 */
export type IfBigInt<T, Then, Else = never> = _IfNotAnyOrNever<
  T,
  T extends bigint ? Then : Else,
  Else
>;

/**
 * Resolves to `Then` if the type `T` is a `bigint` but not a `bigint` literal, otherwise resolves to `Else`.
 *
 * @template T The type to be checked.
 * @template Then The type to return if `T` is a `bigint` literal.
 * @template Else The type to return if `T` is a `bigint` literal or not a `bigint`. Defaults to `never`.
 * @returns `Then` if `T` is a `bigint` but not a `bigint` literal, `Else` otherwise.
 * @example
 * type Yes = IfBigIntLiteral<11n, 'yes', 'no'>; // 'yes'
 * type No = IfBigIntLiteral<bigint, 'yes', 'no'>; // 'no'
 * type YesOrNo = IfBigIntLiteral<11n | 11, 'yes', 'no'>; // 'yes' | 'no'
 */
export type IfBigIntLiteral<T, Then, Else = never> = _IfNotAnyOrNever<
  T,
  T extends bigint ? (bigint extends T ? Else : Then) : Else,
  Else
>;
