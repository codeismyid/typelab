import type { IfPrimitive } from 'lib/conditions';
import type { _IsTrue } from './__internal';

/**
 * Checks if a given type `T` is a `Primitive` type.
 *
 * @template T The type to be checked.
 * @returns `true` if `T` is a `Primitive` type, `false` otherwise.
 * @example
 * type Valid = IsPrimitive<string>; // true
 * type Invalid = IsPrimitive<object>; // false
 */
export type IsPrimitive<T> = _IsTrue<IfPrimitive<T, true, false>>;
