import type { IfNever } from '..';

/** @internal */
export type _IfNotNever<T, Then, Else = never> = IfNever<T, Else, Then>;
