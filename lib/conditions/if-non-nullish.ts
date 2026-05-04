import type { _IfNotAny } from './__internal';
import type { IfNever } from './if-never';

/**
 * Resolves to `Then` if the type `T` is a `{}` type, otherwise resolves to `Else`.
 *
 * @template T The type to be checked.
 * @template Then The type to return if `T` is `{}`.
 * @template Else The type to return if `T` is not `{}`. Defaults to `never`.
 * @returns `Then` if `T` is `{}`, `Else` otherwise.
 * @example
 * type Yes = IfNonNullish<{}, 'yes', 'no'>; // 'yes'
 * type No = IfNonNullish<null, 'yes', 'no'>; // 'no'
 * type YesOrNo = IfNonNullish<{} | null, 'yes', 'no'>; // 'yes' | 'no'
 */
export type IfNonNullish<T, Then, Else = never> = _IfNotAny<
  T,
  IfNever<keyof T, T extends {} ? Then : Else, Else>,
  Else
>;
