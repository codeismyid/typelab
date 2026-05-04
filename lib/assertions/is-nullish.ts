import type { IsAny, IsNever, IsUnknown } from '.';

/**
 * Checks if a given type `T` has `null` | `undefined` type.
 *
 * @template T The type to be checked.
 * @returns `true` if `T` has `null` | `undefined` type, `false` otherwise.
 * @example
 * type Valid1 = IsNullish<string | null>; // true
 * type Valid2 = IsNullish<string | undefined>; // true
 * type Invalid = IsNullish<string>; // false
 */
export type IsNullish<T> =
  IsAny<T> extends true
    ? false
    : IsNever<T> extends true
      ? false
      : IsUnknown<T> extends true
        ? false
        : [undefined] extends [T]
          ? true
          : [null] extends [T]
            ? true
            : false;
