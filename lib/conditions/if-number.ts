import type { _IfNotAnyOrNever } from './__internal';

/**
 * Resolves to `Then` if the type `T` is `number`, otherwise resolves to `Else`.
 *
 * @template T The type to be checked.
 * @template Then The type to return if `T` is `number`.
 * @template Else The type to return if `T` is not `number`. Defaults to `never`.
 * @returns `Then` if `T` is `number`, `Else` otherwise.
 * @example
 * type Yes = IfNumber<number, 'yes', 'no'>; // 'yes'
 * type No = IfNumber<string, 'yes', 'no'>; // 'no'
 * type YesOrNo = IfNumber<string | number, 'yes', 'no'>; // 'yes' | 'no'
 */
export type IfNumber<T, Then, Else = never> = _IfNotAnyOrNever<
  T,
  T extends number ? Then : Else,
  Else
>;

/**
 * Resolves to `Then` if the type `T` is number literal, otherwise resolves to `Else`.
 *
 * @template T The type to be checked.
 * @template Then The type to return if `T` is number literal.
 * @template Else The type to return if `T` is not number literal. Defaults to `never`.
 * @returns `Then` if `T` is number literal, `Else` otherwise.
 * @example
 * type Yes = IfNumberLiteral<11, 'yes', 'no'>; // 'yes'
 * type No = IfNumberLiteral<number, 'yes', 'no'>; // 'no'
 * type YesOrNo = IfNumberLiteral<string | 11, 'yes', 'no'>; // 'yes' | 'no'
 */
export type IfNumberLiteral<T, Then, Else = never> = _IfNotAnyOrNever<
  T,
  T extends number ? (number extends T ? Else : Then) : Else,
  Else
>;

/**
 * Resolves to `Then` if the type `T` is decimal number literal, otherwise resolves to `Else`.
 *
 * @template T The type to be checked.
 * @template Then The type to return if `T` is decimal number literal.
 * @template Else The type to return if `T` is not decimal number literal. Defaults to `never`.
 * @returns `Then` if `T` is decimal number literal, `Else` otherwise.
 * @example
 * type Yes = IfNumberDecimal<11.1, 'yes', 'no'>; // 'yes'
 * type No = IfNumberDecimal<11, 'yes', 'no'>; // 'no'
 * type YesOrNo = IfNumberDecimal<11.1 | 11, 'yes', 'no'>; // 'yes' | 'no'
 */
export type IfNumberDecimal<T, Then, Else = never> = _IfNotAnyOrNever<
  T,
  T extends number
    ? number extends T
      ? Else
      : `${T}` extends `${infer _ extends number}.${infer __ extends number}`
        ? Then
        : Else
    : Else,
  Else
>;

/**
 * Resolves to `Then` if the type `T` is integer number literal, otherwise resolves to `Else`.
 *
 * @template T The type to be checked.
 * @template Then The type to return if `T` is integer number literal.
 * @template Else The type to return if `T` is not integer number literal. Defaults to `never`.
 * @returns `Then` if `T` is integer number literal, `Else` otherwise.
 * @example
 * type Yes = IfNumberInteger<11, 'yes', 'no'>; // 'yes'
 * type No = IfNumberInteger<11.1, 'yes', 'no'>; // 'no'
 * type YesOrNo = IfNumberInteger<11 | 11.1, 'yes', 'no'>; // 'yes' | 'no'
 */
export type IfNumberInteger<T, Then, Else = never> = _IfNotAnyOrNever<
  T,
  T extends number
    ? number extends T
      ? Else
      : `${T}` extends `${infer _ extends number}.${infer __ extends number}`
        ? Else
        : Then
    : Else,
  Else
>;
