/** @internal */
export type _IfUnion<T, Then, Else = never, U = T> = T extends T
  ? [U] extends [T]
    ? Else
    : Then
  : never;
