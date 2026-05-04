import type { IfAny, IfNever } from '..';

/** @internal */
export type _IfNotAny<T, Then, Else = never> = IfAny<T, Else, Then>;

/** @internal */
export type _IfNotAnyOrNever<T, Then, Else = never> = IfAny<
  T,
  Else,
  IfNever<T, Else, Then>
>;

/** @internal */
export type _IfNotAnyOrNeverOrUnknown<T, Then, Else = never> = IfAny<
  T,
  Else,
  IfNever<T, Else, unknown extends T ? Else : Then>
>;
