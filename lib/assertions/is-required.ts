import type { IfRequiredProperty } from 'lib/conditions';
import type { _IsTrueAndNotNever } from './__internal';

/**
 * Determines whether the type of `T[Key]` is required.
 *
 * @template T The type to be checked.
 * @template Key The key of `T`.
 * @returns `true` if `T[Key]` is required, `false` otherwise.
 * @example
 * type Valid = IsRequiredProperty<{ a: string }, 'a'>; // true
 * type Invalid = IsRequiredProperty<{ a?: string }, 'a'>; // false
 * type Never1 = IsRequiredProperty<{ a: string }, 'b'>; // never
 * type Never2 = IsRequiredProperty<{}, 'b'>; // never
 * type Never3 = IsRequiredProperty<undefined, 'b'>; // never
 */
export type IsRequiredProperty<T, Key> = _IsTrueAndNotNever<
  IfRequiredProperty<T, Key, true, false>
>;
