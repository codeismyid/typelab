import type { Fn } from 'lib/aliases';
import type { IsEqual } from 'lib/assertions';
import type { ArrayPush } from '.';

/**
 * Converts a union type to an intersection type.
 *
 * @template T The union type to convert.
 * @returns The intersection of the types in the union.
 * @example
 * // { a: number } & { b: string }
 * type Intersect = UnionToIntersection<{ a: number } | { b: string }>;
 */
export type UnionToIntersection<T> =
  (T extends T ? Fn<[T]> : never) extends Fn<[infer Result]> ? Result : never;

/**
 * Extracts the last type from a union type.
 *
 * ⚠️ **Does not guarantee correct order**.
 *
 * @template T The union type.
 * @returns The last type in the union.
 * @example
 * // 'c'
 * type Last = UnionLast<'a' | 'b' | 'c'>;
 */
export type UnionLast<T> =
  UnionToIntersection<T extends T ? Fn<[], T> : never> extends Fn<
    [],
    infer Result
  >
    ? Result
    : never;

/**
 * Removes the last type from a union.
 *
 * ⚠️ **Does not guarantee correct order**.
 *
 * @template T The union type.
 * @returns A new union with the last type removed.
 * @example
 * // 'a' | 'b'
 * type Popped = UnionPop<'a' | 'b' | 'c'>;
 */
export type UnionPop<T> = Exclude<T, UnionLast<T>>;

/**
 * Get the intersection of two union types, combining only the types that exist in both unions.
 *
 * @template U1 The first union type.
 * @template U2 The second union type.
 * @returns The intersection of `U1` and `U2`.
 * @example
 * // 'b'
 * type Result = UnionIntersection<'a' | 'b', 'b' | 'c'>;
 */
export type UnionIntersection<U1, U2> = U1 extends U1
  ? U2 extends U2
    ? IsEqual<U1, U2> extends true
      ? U1
      : never
    : never
  : never;

/**
 * Creates a union of types that are exclusive to each other.
 *
 * @template U1 The first union.
 * @template U2 The second union.
 * @returns A union of types that excludes common types from both unions.
 * @example
 * // 'a' | 'c'
 * type Exclusive = UnionExclusive<'a' | 'b', 'b' | 'c'>;
 */
export type UnionExclusive<U1, U2> = Exclude<U1, U2> | Exclude<U2, U1>;

/**
 * Converts a union type to a `Tuple`.
 *
 * ⚠️ **Does not guarantee correct order**.
 *
 * @template T The union type.
 * @returns A `Tuple` containing all the types in the union.
 * @example
 * // ['a', 'b', 'c']
 * type Tupl = UnionToTuple<'a' | 'b' | 'c'>;
 */
export type UnionToTuple<T> = _UnionToTuple<T, UnionLast<T>>;

type _UnionToTuple<T, Acc> = [T] extends [never]
  ? []
  : ArrayPush<UnionToTuple<Exclude<T, Acc>>, Acc>;
