import type { IsAny, IsNever, IsUnknown } from '.';

/**
 * Checks if a given type `T` has `null` type.
 *
 * @template T The type to be checked.
 * @returns `true` if `T` has `null` type, `false` otherwise.
 * @example
 * type Valid = IsNullable<string | null>; // true
 * type Invalid = IsNullable<string>; // false
 */
export type IsNullable<T> =
  IsAny<T> extends true
    ? false
    : IsNever<T> extends true
      ? false
      : IsUnknown<T> extends true
        ? false
        : [null] extends [T]
          ? true
          : false;
