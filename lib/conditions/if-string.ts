import type { _IfNotAnyOrNever } from './__internal';

/**
 * Resolves to `Then` if the type `T` is `string`, otherwise resolves to `Else`.
 *
 * @template T The type to be checked.
 * @template Then The type to return if `T` is `string`.
 * @template Else The type to return if `T` is not `string`. Defaults to `never`.
 * @returns `Then` if `T` is `string`, `Else` otherwise.
 * @example
 * type Yes = IfString<string, 'yes', 'no'>; // 'yes'
 * type No = IfString<number, 'yes', 'no'>; // 'no'
 * type YesOrNo = IfString<string | number, 'yes', 'no'>; // 'yes' | 'no'
 */
export type IfString<T, Then, Else = never> = _IfNotAnyOrNever<
  T,
  T extends string ? Then : Else,
  Else
>;

/**
 * Resolves to `Then` if the type `T` is string literal, otherwise resolves to `Else`.
 *
 * @template T The type to be checked.
 * @template Then The type to return if `T` is string literal.
 * @template Else The type to return if `T` is not string literal. Defaults to `never`.
 * @returns `Then` if `T` is string literal, `Else` otherwise.
 * @example
 * type Yes = IfStringLiteral<'', 'yes', 'no'>; // 'yes'
 * type No = IfStringLiteral<string, 'yes', 'no'>; // 'no'
 * type YesOrNo = IfStringLiteral<'' | number, 'yes', 'no'>; // 'yes' | 'no'
 */
export type IfStringLiteral<T, Then, Else> = _IfNotAnyOrNever<
  T,
  T extends string ? (string extends T ? Else : Then) : Else,
  Else
>;

/**
 * Resolves to `Then` if the type `T` is number-like string literal, otherwise resolves to `Else`.
 *
 * @template T The type to be checked.
 * @template Then The type to return if `T` is number-like string literal.
 * @template Else The type to return if `T` is not number-like string literal. Defaults to `never`.
 * @returns `Then` if `T` is number-like string literal, `Else` otherwise.
 * @example
 * type Yes = IfStringNumberLike<'11', 'yes', 'no'>; // 'yes'
 * type No = IfStringNumberLike<'hello', 'yes', 'no'>; // 'no'
 * type YesOrNo = IfStringNumberLike<'11' | 'hello', 'yes', 'no'>; // 'yes' | 'no'
 */
export type IfStringNumberLike<T, Then, Else> = IfStringLiteral<
  T,
  T extends `${infer _ extends number}` ? Then : Else,
  Else
>;
