/**
 * Resolves to `Then` if the type `T[Key]` is required, otherwise resolves to `Else`.
 *
 * @template T The type to be checked.
 * @template Key The key of `T`.
 * @template Then The type to return if `T[Key]` is required.
 * @template Else The type to return if `T[Key]` is not required. Defaults to `never`.
 * @returns `Then` if `T[Key]` is required, `Else` otherwise.
 * @example
 * // 'yes'
 * type Yes = IfRequiredProperty<{ a: string; }, 'a', 'yes', 'no'>;
 *
 * // 'no'
 * type No = IfRequiredProperty<{ a?: string; }, 'a', 'yes', 'no'>;
 *
 * // 'yes' | 'no'
 * type YesOrNo = IfRequiredProperty<{ a: string; } | { a?: string; }, 'a', 'yes', 'no'>;
 *
 * // never
 * type Never = IfRequiredProperty<{ a?: string }, 'b', 'yes', 'no'>;
 */
export type IfRequiredProperty<T, Key, Then, Else> = T extends T
  ? Key extends keyof T
    ? Pick<T, Key> extends infer U1
      ? Required<U1> extends infer U2
        ? [U1, U2] extends [U2, U1]
          ? Then
          : Else
        : never
      : never
    : never
  : never;
