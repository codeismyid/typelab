import type { IfUndefined } from 'lib/conditions';
import type { _IsTrue } from './__internal';

/**
 * Checks if a given type `T` is `undefined`.
 *
 * @template T The type to be checked.
 * @returns `true` if `T` is `undefined`, `false` otherwise.
 * @example
 * type Valid = IsUndefined<undefined>; // true
 * type Invalid = IsUndefined<string>; // false
 */
export type IsUndefined<T> = _IsTrue<IfUndefined<T, true, false>>;
