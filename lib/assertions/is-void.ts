import type { IfVoid } from 'lib/conditions';
import type { _IsTrue } from './__internal';

/**
 * Checks if a given type `T` is `void`.
 *
 * @template T The type to be checked.
 * @returns `true` if `T` is `void`, `false` otherwise.
 * @example
 * type Valid = IsVoid<void>; // true
 * type Invalid = IsVoid<string>; // false
 */
export type IsVoid<T> = _IsTrue<IfVoid<T, true, false>>;
