import type { Primitive } from 'lib/aliases';
import type { _IfNotAnyOrNever } from './__internal';

/**
 * Resolves to `Then` if the type `T` is assignable to {@link Primitive `Primitive`}, otherwise resolves to `Else`.
 *
 * @template T The type to be checked.
 * @template Then The type to return if `T` is `Primitive`.
 * @template Else The type to return if `T` is not `Primitive`. Defaults to `never`.
 * @returns `Then` if `T` is assignable to {@link Primitive `Primitive`}, `Else` otherwise.
 * @example
 * type Yes = IfPrimitive<string, 'yes', 'no'>; // 'yes'
 * type No = IfPrimitive<object, 'yes', 'no'>; // 'no'
 * type YesOrNo = IfPrimitive<string | object, 'yes', 'no'>; // 'yes' | 'no'
 */
export type IfPrimitive<T, Then, Else = never> = _IfNotAnyOrNever<
  T,
  T extends Primitive ? Then : Else,
  Else
>;
