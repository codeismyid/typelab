/** @internal */
export type _IsTrue<T> = [T] extends [true] ? true : false;

/** @internal */
export type _IsTrueAndNotNever<T> = T extends never
  ? false
  : [T] extends [true]
    ? true
    : false;
