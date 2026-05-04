import type { Class } from 'lib/aliases';
import type { _IfNotAnyOrNever } from './__internal';

/**
 * Resolves to `Then` if the type `T` is {@link Class `Class`} type, otherwise resolves to `Else`.
 *
 * @template T The type to be checked.
 * @template Then The type to return if `T` is a `Class`.
 * @template Else The type to return if `T` is not a `Class`. Defaults to `never`.
 * @returns `Then` if `T` is a {@link Class `Class`}, `Else` otherwise.
 * @example
 * type Yes = IfClass<Class, 'yes', 'no'>; // 'yes'
 * type No = IfClass<string, 'yes', 'no'>; // 'no'
 * type YesOrNo = IfClass<Class | string, 'yes', 'no'>; // 'yes' | 'no'
 */
export type IfClass<T, Then, Else = never> = _IfNotAnyOrNever<
  T,
  T extends Class ? Then : Else,
  Else
>;
