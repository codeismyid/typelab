import type { ParseString } from '.';

/**
 * Gets the type of a property `K` from `T`.
 *
 * @template T The target type.
 * @template K The key of the property.
 * @template BailType Bail type, if `K` is not a key of `T`, defaults to `never`.
 * @returns The type of `T[K]`, or `BailType` if `K` is not a key of `T`.
 * @example
 * type User = { name: string };
 * type Valid = PropValue<User, 'name'>; // string
 * type Invalid = PropValue<User, 'email'>; // never
 */
export type PropValue<T, K, BailType = never> = K extends keyof T
  ? T[K]
  : ParseString<K> extends infer Key extends keyof T
    ? T[Key]
    : BailType;
