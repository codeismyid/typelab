import type { _IfNotAnyOrNever } from './__internal';

/**
 * Resolves to `Then` if the type `T` is `undefined`, otherwise resolves to `Else`.
 *
 * @template T The type to be checked.
 * @template Then The type to return if `T` is `undefined`.
 * @template Else The type to return if `T` is not `undefined`. Defaults to `never`.
 * @returns `Then` if `T` is `undefined`, `Else` otherwise.
 * @example
 * type Yes = IfUndefined<undefined, 'yes', 'no'>; // 'yes'
 * type No = IfUndefined<string, 'yes', 'no'>; // 'no'
 * type YesOrNo = IfUndefined<string | undefined, 'yes', 'no'>; // 'yes' | 'no'
 */
export type IfUndefined<T, Then, Else = never> = _IfNotAnyOrNever<
  T,
  T extends undefined ? Then : Else,
  Else
>;
