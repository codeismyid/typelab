import type { IfOptionalProperty } from 'lib/conditions';
import type { _IsTrueAndNotNever } from './__internal';

/**
 * Determines whether the type of `T[Key]` is optional.
 *
 * @template T The type to be checked.
 * @template Key The key of `T`.
 * @returns `true` if `T[Key]` is optional, `false` otherwise.
 * @example
 * type Valid = IsOptionalProperty<{ a?: string }, 'a'>; // true
 * type Invalid = IsOptionalProperty<{ a: string }, 'a'>; // false
 * type Never1 = IsOptionalProperty<{ a: string }, 'b'>; // never
 * type Never2 = IsOptionalProperty<{}, 'b'>; // never
 * type Never3 = IsOptionalProperty<undefined, 'b'>; // never
 */
export type IsOptionalProperty<T, Key> = _IsTrueAndNotNever<
  IfOptionalProperty<T, Key, true, false>
>;
