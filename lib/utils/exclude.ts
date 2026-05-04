/**
 * Exclude `null` and `undefined` from type `T`.
 *
 * @template T The original type.
 * @returns `T` without `null` and `undefined.
 * @example
 * type NonNullishType = ExcludeNullish<string | null | undefined>; // string
 */
export type ExcludeNullish<T> = Exclude<T, null | undefined>;

/**
 * Exclude `null` from type `T`.
 *
 * @template T The original type.
 * @returns `T` without `null`.
 * @example
 * type NonNullType = ExcludeNull<string | null>; // string
 */
export type ExcludeNull<T> = Exclude<T, null>;

/**
 * Exclude `undefined` from type `T`.
 *
 * @returns `T` without `undefined.
 * @template T The original type.
 * @example
 * type NonUndefinedType = ExcludeUndefined<string | undefined>; // string
 */
export type ExcludeUndefined<T> = Exclude<T, undefined>;
