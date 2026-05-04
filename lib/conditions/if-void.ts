import type { _IfNotAnyOrNever } from './__internal';

/**
 * Resolves to `Then` if the type `T` is `void`, otherwise resolves to `Else`.
 *
 * @template T The type to be checked.
 * @template Then The type to return if `T` is `void`.
 * @template Else The type to return if `T` is not `void`. Defaults to `never`.
 * @returns `Then` if `T` is `void`, `Else` otherwise.
 * @example
 * type Yes = IfVoid<void, 'yes', 'no'>; // 'yes'
 * type No = IfVoid<string, 'yes', 'no'>; // 'no'
 * type YesOrNo = IfVoid<string | void, 'yes', 'no'>; // 'yes' | 'no'
 */
export type IfVoid<T, Then, Else = never> = _IfNotAnyOrNever<
  T,
  T extends undefined ? Else : T extends void ? Then : Else,
  Else
>;
