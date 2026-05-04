import type { IsAny } from 'lib/assertions';

/**
 * Resolves to `Then` if `T1` and `T2` are equal, otherwise resolves to `Else`.
 *
 * @template T1 The first type to compare.
 * @template T2 The second type to compare.
 * @template Then The type to return if `T1` and `T2` are equal.
 * @template Else The type to return if `T1` and `T2` are not equal. Defaults to `never`.
 * @returns `Then` if `T1` and `T2` are equal, `Else` otherwise.
 * @example
 * type Yes = IfEqual<string, string, 'yes', 'no'>; // 'yes'
 * type No = IfEqual<string, number, 'yes', 'no'>; // 'no'
 */
export type IfEqual<T1, T2, Then, Else = never> =
  IsAny<T1> extends true
    ? IsAny<T2> extends true
      ? Then
      : Else
    : IsAny<T2> extends true
      ? IsAny<T1> extends true
        ? Then
        : Else
      : [T1, T2] extends [T2, T1]
        ? Then
        : Else;

/**
 * Resolves to `Then` if `T1` and `T2` are not equal, otherwise resolves to `Else`.
 *
 * @template T1 The first type to compare.
 * @template T2 The second type to compare.
 * @template Then The type to return if `T1` and `T2` are not equal.
 * @template Else The type to return if `T1` and `T2` are equal. Defaults to `never`.
 * @returns `Then` if `T1` and `T2` are equal, `Else` otherwise.
 * @example
 * type Yes = IfNotEqual<string, number, 'yes', 'no'>; // 'yes'
 * type No = IfNotEqual<string, string, 'yes', 'no'>; // 'no'
 */
export type IfNotEqual<T1, T2, Then, Else = never> =
  IsAny<T1> extends true
    ? IsAny<T2> extends true
      ? Else
      : Then
    : IsAny<T2> extends true
      ? IsAny<T1> extends true
        ? Else
        : Then
      : [T1, T2] extends [T2, T1]
        ? Else
        : Then;
