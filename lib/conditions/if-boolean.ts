import type { Falsy } from 'lib/aliases';
import type { _IfNotAnyOrNever } from './__internal';

/**
 * Resolves to `Then` if the type `T` is a `boolean`, otherwise resolves to `Else`.
 *
 * @template T The type to be checked.
 * @template Then The type to return if `T` is a `boolean`.
 * @template Else The type to return if `T` is not a `boolean`. Defaults to `never`.
 * @returns `Then` if `T` is a `boolean`, `Else` otherwise.
 * @example
 * type Yes = IfBoolean<boolean, 'yes', 'no'>; // 'yes'
 * type No = IfBoolean<string, 'yes', 'no'>; // 'no'
 * type YesOrNo = IfBoolean<boolean | string, 'yes', 'no'>; // 'yes' | 'no'
 */
export type IfBoolean<T, Then, Else = never> = _IfNotAnyOrNever<
  T,
  T extends boolean ? Then : Else,
  Else
>;

/**
 * Resolves to `Then` if the type `T` is a boolean literal (`true` or `false`), otherwise resolves to `Else`.
 *
 * @template T The type to be checked.
 * @template Then The type to return if `T` is a boolean literal.
 * @template Else The type to return if `T` is not a boolean literal. Defaults to `never`.
 * @returns `Then` if `T` is a boolean literal, `Else` otherwise.
 * @example
 * type Yes = IfBooleanLiteral<true, 'yes', 'no'>; // 'yes'
 * type No = IfBooleanLiteral<boolean, 'yes', 'no'>; // 'yes'
 * type YesOrNo = IfBooleanLiteral<true | string, 'yes', 'no'>; // 'yes' | 'no'
 */
export type IfBooleanLiteral<T, Then, Else = never> = _IfNotAnyOrNever<
  T,
  boolean extends T ? Else : T extends boolean ? Then : Else,
  Else
>;

/**
 * Resolves to `Then` if the type `T` is exactly `false`, otherwise resolves to `Else`.
 *
 * @template T The type to be checked.
 * @template Then The type to return if `T` is `false`.
 * @template Else The type to return if `T` is not `false`. Defaults to `never`.
 * @returns `Then` if `T` is `false`, `Else` otherwise.
 * @example
 * type Yes = IfFalse<false, 'yes', 'no'>; // 'yes'
 * type No = IfFalse<true, 'yes', 'no'>; // 'no'
 * type YesOrNo = IfFalse<boolean, 'yes', 'no'>; // 'yes' | 'no'
 */
export type IfFalse<T, Then, Else = never> = _IfNotAnyOrNever<
  T,
  T extends false ? Then : Else,
  Else
>;

/**
 * Resolves to `Then` if the type `T` is {@link Falsy `Falsy`} type, otherwise resolves to `Else`.
 *
 * @template T The type to be checked.
 * @template Then The type to return if `T` is a falsy type.
 * @template Else The type to return if `T` is not a falsy type. Defaults to `never`.
 * @returns `Then` if `T` is {@link Falsy `Falsy`}, `Else` otherwise.
 * @example
 * type Yes = IfFalsy<0, 'yes', 'no'>; // 'yes'
 * type No = IfFalsy<1, 'yes', 'no'>; // 'no'
 * type YesOrNo = IfFalsy<0 | 1, 'yes', 'no'>; // 'yes' | 'no'
 */
export type IfFalsy<T, Then, Else = never> = _IfNotAnyOrNever<
  T,
  T extends Falsy ? Then : Else,
  Else
>;

/**
 * Resolves to `Then` if the type `T` is exactly `true`, otherwise resolves to `Else`.
 *
 * @template T The type to be checked.
 * @template Then The type to return if `T` is `true`.
 * @template Else The type to return if `T` is not `true`. Defaults to `never`.
 * @returns `Then` if `T` is `true`, `Else` otherwise.
 * @example
 * type Yes = IfTrue<true, 'yes', 'no'>; // 'yes'
 * type No = IfTrue<false, 'yes', 'no'>; // 'no'
 * type YesOrNo = IfTrue<boolean, 'yes', 'no'>; // 'yes' | 'no'
 */
export type IfTrue<T, Then, Else = never> = _IfNotAnyOrNever<
  T,
  T extends true ? Then : Else,
  Else
>;

/**
 * Resolves to `Then` if the type `T` is not {@link Falsy `Falsy`} type, otherwise resolves to `Else`.
 *
 * @template T The type to be checked.
 * @template Then The type to return if `T` is not falsy type.
 * @template Else The type to return if `T` is a falsy type. Defaults to `never`.
 * @returns `Then` if `T` is not {@link Falsy `Falsy`} type, `Else` otherwise.
 * @example
 * type Yes = IfTruthy<1, 'yes', 'no'>; // 'yes'
 * type No = IfTruthy<0, 'yes', 'no'>; // 'no'
 * type YesOrNo = IfTruthy<0 | 1, 'yes', 'no'>; // 'yes' | 'no'
 */
export type IfTruthy<T, Then, Else = never> = _IfNotAnyOrNever<
  T,
  T extends Falsy ? Else : Then,
  Else
>;
