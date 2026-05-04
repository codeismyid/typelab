import type { _IfNotAnyOrNever } from './__internal';

/**
 * Resolves to `Then` if the type `T` is `null`, otherwise resolves to `Else`.
 *
 * @template T The type to be checked.
 * @template Then The type to return if `T` is `null`.
 * @template Else The type to return if `T` is not `null`. Defaults to `never`.
 * @returns `Then` if `T` is `null`, `Else` otherwise.
 * @example
 * type Yes = IfNull<null, 'yes', 'no'>; // 'yes'
 * type No = IfNull<string, 'yes', 'no'>; // 'no'
 * type YesOrNo = IfNull<string | null, 'yes', 'no'>; // 'yes' | 'no'
 */
export type IfNull<T, Then, Else = never> = _IfNotAnyOrNever<
  T,
  T extends null ? Then : Else,
  Else
>;
