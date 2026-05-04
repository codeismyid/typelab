import type { IfNull } from 'lib/conditions';
import type { _IsTrue } from './__internal';

/**
 * Checks if a given type `T` is a `null` type.
 *
 * @template T The type to be checked.
 * @returns `true` if `T` is a `null` type, `false` otherwise.
 * @example
 * type Valid = IsNull<{}>; // true
 * type Invalid = IsNull<string>; // false
 */
export type IsNull<T> = _IsTrue<IfNull<T, true, false>>;
