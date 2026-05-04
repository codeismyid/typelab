[typelab](README.md) / conditions

Handy TypeScript conditional types for branching logic in the type system.
These helpers let you choose different types based on checks like arrays,
objects, functions, primitives, and special cases like null, undefined,
unions, and more.

## Type Aliases

<table>
<thead>
<tr>
<th>Type Alias</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

[IfAny](conditions/IfAny.md)

</td>
<td>

Resolves to `Then` if the type `T` is an `any` type, otherwise resolves to `Else`.

**Example**

```ts
type Yes = IfAny<any, 'yes', 'no'>; // 'yes'
type No = IfAny<string, 'yes', 'no'>; // 'no'
```

</td>
</tr>
<tr>
<td>

[IfArray](conditions/IfArray.md)

</td>
<td>

Resolves to `Then` if the type `T` is an array (readonly or writable), otherwise resolves to `Else`.

**Example**

```ts
type Yes = IfArray<string[], 'yes', 'no'>; // 'yes'
type No = IfArray<string, 'yes', 'no'>; // 'no'
type YesOrNo = IfArray<string[] | string, 'yes', 'no'>; // 'yes' | 'no'
```

</td>
</tr>
<tr>
<td>

[IfArrayWritable](conditions/IfArrayWritable.md)

</td>
<td>

Resolves to `Then` if the type `T` is a writable array, otherwise resolves to `Else`.

**Example**

```ts
// 'yes'
type Yes = IfArrayWritable<string[], 'yes', 'no'>;

// 'no'
type No = IfArrayWritable<readonly string[], 'yes', 'no'>;

// 'yes' | 'no'
type YesOrNo = IfArrayWritable<string[] | readonly string[], 'yes', 'no'>;
```

</td>
</tr>
<tr>
<td>

[IfArrayReadonly](conditions/IfArrayReadonly.md)

</td>
<td>

Resolves to `Then` if the type `T` is a readonly array, otherwise resolves to `Else`.

**Example**

```ts
// 'yes'
type Yes = IfArrayReadonly<readonly string[], 'yes', 'no'>;

// 'no'
type No = IfArrayReadonly<string[], 'yes', 'no'>;

// 'yes' | 'no'
type YesOrNo = IfArrayReadonly<readonly string[] | string[], 'yes', 'no'>;
```

</td>
</tr>
<tr>
<td>

[IfTuple](conditions/IfTuple.md)

</td>
<td>

Resolves to `Then` if the type `T` is a tuple (readonly or writable), otherwise resolves to `Else`.

**Example**

```ts
type Yes = IfTuple<[string], 'yes', 'no'>; // 'yes'
type No = IfTuple<string[], 'yes', 'no'>; // 'no'
type YesOrNo = IfTuple<[string] | string[], 'yes', 'no'>; // 'yes' | 'no'
```

</td>
</tr>
<tr>
<td>

[IfTupleWritable](conditions/IfTupleWritable.md)

</td>
<td>

Resolves to `Then` if the type `T` is a writable tuple, otherwise resolves to `Else`.

**Example**

```ts
// 'yes'
type Yes = IfTupleWritable<[string], 'yes', 'no'>;

// 'no'
type No = IfTupleWritable<readonly [string], 'yes', 'no'>;

// 'yes' | 'no'
type YesOrNo = IfTupleWritable<[string] | readonly [string], 'yes', 'no'>;
```

</td>
</tr>
<tr>
<td>

[IfTupleReadonly](conditions/IfTupleReadonly.md)

</td>
<td>

Resolves to `Then` if the type `T` is a readonly tuple, otherwise resolves to `Else`.

**Example**

```ts
// 'yes'
type Yes = IfTupleReadonly<readonly [string], 'yes', 'no'>;

// 'no'
type No = IfTupleReadonly<[string], 'yes', 'no'>;

// 'yes' | 'no'
type YesOrNo = IfTupleReadonly<readonly [string] | [string], 'yes', 'no'>;
```

</td>
</tr>
<tr>
<td>

[IfBigInt](conditions/IfBigInt.md)

</td>
<td>

Resolves to `Then` if the type `T` is a `bigint`, otherwise resolves to `Else`.

**Example**

```ts
type Yes = IfBigInt<bigint, 'yes', 'no'>; // 'yes'
type No = IfBigInt<number, 'yes', 'no'>; // 'no'
type YesOrNo = IfBigInt<bigint | number, 'yes', 'no'>; // 'yes' | 'no'
```

</td>
</tr>
<tr>
<td>

[IfBigIntLiteral](conditions/IfBigIntLiteral.md)

</td>
<td>

Resolves to `Then` if the type `T` is a `bigint` but not a `bigint` literal, otherwise resolves to `Else`.

**Example**

```ts
type Yes = IfBigIntLiteral<11n, 'yes', 'no'>; // 'yes'
type No = IfBigIntLiteral<bigint, 'yes', 'no'>; // 'no'
type YesOrNo = IfBigIntLiteral<11n | 11, 'yes', 'no'>; // 'yes' | 'no'
```

</td>
</tr>
<tr>
<td>

[IfBoolean](conditions/IfBoolean.md)

</td>
<td>

Resolves to `Then` if the type `T` is a `boolean`, otherwise resolves to `Else`.

**Example**

```ts
type Yes = IfBoolean<boolean, 'yes', 'no'>; // 'yes'
type No = IfBoolean<string, 'yes', 'no'>; // 'no'
type YesOrNo = IfBoolean<boolean | string, 'yes', 'no'>; // 'yes' | 'no'
```

</td>
</tr>
<tr>
<td>

[IfBooleanLiteral](conditions/IfBooleanLiteral.md)

</td>
<td>

Resolves to `Then` if the type `T` is a boolean literal (`true` or `false`), otherwise resolves to `Else`.

**Example**

```ts
type Yes = IfBooleanLiteral<true, 'yes', 'no'>; // 'yes'
type No = IfBooleanLiteral<boolean, 'yes', 'no'>; // 'yes'
type YesOrNo = IfBooleanLiteral<true | string, 'yes', 'no'>; // 'yes' | 'no'
```

</td>
</tr>
<tr>
<td>

[IfFalse](conditions/IfFalse.md)

</td>
<td>

Resolves to `Then` if the type `T` is exactly `false`, otherwise resolves to `Else`.

**Example**

```ts
type Yes = IfFalse<false, 'yes', 'no'>; // 'yes'
type No = IfFalse<true, 'yes', 'no'>; // 'no'
type YesOrNo = IfFalse<boolean, 'yes', 'no'>; // 'yes' | 'no'
```

</td>
</tr>
<tr>
<td>

[IfFalsy](conditions/IfFalsy.md)

</td>
<td>

Resolves to `Then` if the type `T` is [\`Falsy\`](aliases/Falsy.md) type, otherwise resolves to `Else`.

**Example**

```ts
type Yes = IfFalsy<0, 'yes', 'no'>; // 'yes'
type No = IfFalsy<1, 'yes', 'no'>; // 'no'
type YesOrNo = IfFalsy<0 | 1, 'yes', 'no'>; // 'yes' | 'no'
```

</td>
</tr>
<tr>
<td>

[IfTrue](conditions/IfTrue.md)

</td>
<td>

Resolves to `Then` if the type `T` is exactly `true`, otherwise resolves to `Else`.

**Example**

```ts
type Yes = IfTrue<true, 'yes', 'no'>; // 'yes'
type No = IfTrue<false, 'yes', 'no'>; // 'no'
type YesOrNo = IfTrue<boolean, 'yes', 'no'>; // 'yes' | 'no'
```

</td>
</tr>
<tr>
<td>

[IfTruthy](conditions/IfTruthy.md)

</td>
<td>

Resolves to `Then` if the type `T` is not [\`Falsy\`](aliases/Falsy.md) type, otherwise resolves to `Else`.

**Example**

```ts
type Yes = IfTruthy<1, 'yes', 'no'>; // 'yes'
type No = IfTruthy<0, 'yes', 'no'>; // 'no'
type YesOrNo = IfTruthy<0 | 1, 'yes', 'no'>; // 'yes' | 'no'
```

</td>
</tr>
<tr>
<td>

[IfClass](conditions/IfClass.md)

</td>
<td>

Resolves to `Then` if the type `T` is [\`Class\`](aliases/Class.md) type, otherwise resolves to `Else`.

**Example**

```ts
type Yes = IfClass<Class, 'yes', 'no'>; // 'yes'
type No = IfClass<string, 'yes', 'no'>; // 'no'
type YesOrNo = IfClass<Class | string, 'yes', 'no'>; // 'yes' | 'no'
```

</td>
</tr>
<tr>
<td>

[IfEqual](conditions/IfEqual.md)

</td>
<td>

Resolves to `Then` if `T1` and `T2` are equal, otherwise resolves to `Else`.

**Example**

```ts
type Yes = IfEqual<string, string, 'yes', 'no'>; // 'yes'
type No = IfEqual<string, number, 'yes', 'no'>; // 'no'
```

</td>
</tr>
<tr>
<td>

[IfNotEqual](conditions/IfNotEqual.md)

</td>
<td>

Resolves to `Then` if `T1` and `T2` are not equal, otherwise resolves to `Else`.

**Example**

```ts
type Yes = IfNotEqual<string, number, 'yes', 'no'>; // 'yes'
type No = IfNotEqual<string, string, 'yes', 'no'>; // 'no'
```

</td>
</tr>
<tr>
<td>

[IfExtends](conditions/IfExtends.md)

</td>
<td>

Resolves to `Then` if `T1` is assignable to `T2`, otherwise resolves to `Else`.

**Example**

```ts
type Yes = IfExtends<'', string, 'yes', 'no'>; // 'yes'
type No = IfExtends<string, '', 'yes', 'no'>; // 'no'
type YesOrNo = IfExtends<string | number, string, 'yes', 'no'>; // 'yes' | 'no'
```

</td>
</tr>
<tr>
<td>

[IfNotExtends](conditions/IfNotExtends.md)

</td>
<td>

Resolves to `Then` if `T1` is not assignable to `T2`, otherwise resolves to `Else`.

**Example**

```ts
type Yes = IfNotExtends<string, '', 'yes', 'no'>; // 'yes'
type No = IfNotExtends<'', string, 'yes', 'no'>; // 'no'
type YesOrNo = IfNotExtends<string | number, string, 'yes', 'no'>; // 'yes' | 'no'
```

</td>
</tr>
<tr>
<td>

[IfAssignable](conditions/IfAssignable.md)

</td>
<td>

Alias for [\`IfExtends\`](conditions/IfExtends.md).

</td>
</tr>
<tr>
<td>

[IfNotAssignable](conditions/IfNotAssignable.md)

</td>
<td>

Alias for [\`IfNotExtends\`](conditions/IfNotExtends.md).

</td>
</tr>
<tr>
<td>

[IfExtendsMutually](conditions/IfExtendsMutually.md)

</td>
<td>

Resolves to `Then` if `T1` is assignable to `T2` and `T2` is assignable to `T1`, otherwise resolves to `Else`.

**Example**

```ts
type Yes = IfExtendsMutually<string, string, 'yes', 'no'>; // 'yes'
type No = IfExtendsMutually<'', string, 'yes', 'no'>; // 'no'
type YesOrNo = IfExtendsMutually<string | number, string, 'yes', 'no'>; // 'yes' | 'no'
```

</td>
</tr>
<tr>
<td>

[IfNotExtendsMutually](conditions/IfNotExtendsMutually.md)

</td>
<td>

Resolves to `Then` if `T1` is not assignable to `T2` or `T2` is not assignable to `T1`, otherwise resolves to `Else`.

**Example**

```ts
type Yes = IfNotExtendsMutually<'', string, 'yes', 'no'>; // 'yes'
type No = IfNotExtendsMutually<string, string, 'yes', 'no'>; // 'no'
type YesOrNo = IfNotExtendsMutually<string | number, string, 'yes', 'no'>; // 'yes' | 'no'
```

</td>
</tr>
<tr>
<td>

[IfAssignableMutually](conditions/IfAssignableMutually.md)

</td>
<td>

Alias for [\`IfExtendsMutually\`](conditions/IfExtendsMutually.md).

</td>
</tr>
<tr>
<td>

[IfNotAssignableMutually](conditions/IfNotAssignableMutually.md)

</td>
<td>

Alias for [\`IfNotExtendsMutually\`](conditions/IfNotExtendsMutually.md).

</td>
</tr>
<tr>
<td>

[IfExtendsEitherWay](conditions/IfExtendsEitherWay.md)

</td>
<td>

Resolves to `Then` if `T1` is assignable to `T2` or `T2` is assignable to `T1`, otherwise resolves to `Else`.

**Example**

```ts
type Yes = IfExtendsEitherWay<string, '', 'yes', 'no'>; // 'yes'
type No = IfExtendsEitherWay<number, string, 'yes', 'no'>; // 'no'
type YesOrNo = IfExtendsEitherWay<string | number, string, 'yes', 'no'>; // 'yes' | 'no'
```

</td>
</tr>
<tr>
<td>

[IfNotExtendsEitherWay](conditions/IfNotExtendsEitherWay.md)

</td>
<td>

Resolves to `Then` if `T1` is not assignable to `T2` and `T2` is not assignable to `T1`, otherwise resolves to `Else`.

**Example**

```ts
type Yes = IfNotExtendsEitherWay<number, string, 'yes', 'no'>; // 'yes'
type No = IfNotExtendsEitherWay<string, '', 'yes', 'no'>; // 'no'
type YesOrNo = IfNotExtendsEitherWay<string | number, string, 'yes', 'no'>; // 'yes' | 'no'
```

</td>
</tr>
<tr>
<td>

[IfAssignableEitherWay](conditions/IfAssignableEitherWay.md)

</td>
<td>

Alias for [\`IfExtendsEitherWay\`](conditions/IfExtendsEitherWay.md).

</td>
</tr>
<tr>
<td>

[IfNotAssignableEitherWay](conditions/IfNotAssignableEitherWay.md)

</td>
<td>

Alias for [\`IfNotExtendsEitherWay\`](conditions/IfNotExtendsEitherWay.md).

</td>
</tr>
<tr>
<td>

[IfFunction](conditions/IfFunction.md)

</td>
<td>

Resolves to `Then` if the type `T` is a function, otherwise resolves to `Else`.

**Example**

```ts
type Yes = IfFunction<() => void, 'yes', 'no'>; // 'yes'
type No = IfFunction<string, 'yes', 'no'>; // 'no'
type YesOrNo = IfFunction<(() => void) | string, 'yes', 'no'>; // 'yes' | 'no'
```

</td>
</tr>
<tr>
<td>

[IfFn](conditions/IfFn.md)

</td>
<td>

Alias for [\`IfFunction\`](conditions/IfFunction.md).

</td>
</tr>
<tr>
<td>

[IfAsyncFunction](conditions/IfAsyncFunction.md)

</td>
<td>

Resolves to `Then` if the type `T` is an async function, otherwise resolves to `Else`.

**Example**

```ts
type Yes = IfAsyncFunction<() => Promise<void>, 'yes', 'no'>; // 'yes'
type No = IfAsyncFunction<() => void, 'yes', 'no'>; // 'no'
type YesOrNo = IfAsyncFunction<(() => Promise<void>) | (() => void), 'yes', 'no'>; // 'yes' | 'no'
```

</td>
</tr>
<tr>
<td>

[IfAsyncFn](conditions/IfAsyncFn.md)

</td>
<td>

Alias for [\`IfAsyncFunction\`](conditions/IfAsyncFunction.md).

</td>
</tr>
<tr>
<td>

[IfNewableFunction](conditions/IfNewableFunction.md)

</td>
<td>

Resolves to `Then` if the type `T` is a newable function, otherwise resolves to `Else`.

**Example**

```ts
type Yes = IfNewableFunction<new () => void, 'yes', 'no'>; // 'yes'
type No = IfNewableFunction<() => void, 'yes', 'no'>; // 'no'
type YesOrNo = IfNewableFunction<(new () => void) | (() => void), 'yes', 'no'>; // 'yes' | 'no'
```

</td>
</tr>
<tr>
<td>

[IfNewableFn](conditions/IfNewableFn.md)

</td>
<td>

Alias for [\`IfNewableFunction\`](conditions/IfNewableFunction.md).

</td>
</tr>
<tr>
<td>

[IfIntersected](conditions/IfIntersected.md)

</td>
<td>

Resolves to `Then` if `T1` is intersected with `T2`, otherwise resolves to `Else`.

**Example**

```ts
type Yes = IfIntersected<'a' | 'c', 'a' | 'b', 'yes', 'no'>; // 'yes'
type No = IfIntersected<'c', 'a' | 'b', 'yes', 'no'>; // 'no'
```

</td>
</tr>
<tr>
<td>

[IfNotIntersected](conditions/IfNotIntersected.md)

</td>
<td>

Resolves to `Then` if `T1` is not intersected with `T2`, otherwise resolves to `Else`.

**Example**

```ts
type Yes = IfNotIntersected<'c', 'a' | 'b', 'yes', 'no'>; // 'yes'
type No = IfNotIntersected<'a' | 'c', 'a' | 'b', 'yes', 'no'>; // 'no'
```

</td>
</tr>
<tr>
<td>

[IfNegative](conditions/IfNegative.md)

</td>
<td>

Resolves to `Then` if the type `T` is negative, otherwise resolves to `Else`.

**Example**

```ts
type Yes = IfNegative<-11 | -11n | '-11' | '-11n', 'yes', 'no'>; // 'yes'
type No = IfNegative<11, 'yes', 'no'>; // 'no'
type YesOrNo = IfNegative<-11 | 11, 'yes', 'no'>; // 'yes' | 'no'
```

</td>
</tr>
<tr>
<td>

[IfNever](conditions/IfNever.md)

</td>
<td>

Resolves to `Then` if the type `T` is a `never` type, otherwise resolves to `Else`.

**Example**

```ts
type Yes = IfNever<never, 'yes', 'no'>; // 'yes'
type No = IfNever<string, 'yes', 'no'>; // 'no'
```

</td>
</tr>
<tr>
<td>

[IfNonNullish](conditions/IfNonNullish.md)

</td>
<td>

Resolves to `Then` if the type `T` is a `{}` type, otherwise resolves to `Else`.

**Example**

```ts
type Yes = IfNonNullish<{}, 'yes', 'no'>; // 'yes'
type No = IfNonNullish<null, 'yes', 'no'>; // 'no'
type YesOrNo = IfNonNullish<{} | null, 'yes', 'no'>; // 'yes' | 'no'
```

</td>
</tr>
<tr>
<td>

[IfNull](conditions/IfNull.md)

</td>
<td>

Resolves to `Then` if the type `T` is `null`, otherwise resolves to `Else`.

**Example**

```ts
type Yes = IfNull<null, 'yes', 'no'>; // 'yes'
type No = IfNull<string, 'yes', 'no'>; // 'no'
type YesOrNo = IfNull<string | null, 'yes', 'no'>; // 'yes' | 'no'
```

</td>
</tr>
<tr>
<td>

[IfNullable](conditions/IfNullable.md)

</td>
<td>

Resolves to `Then` if the type `T` is a nullable type, otherwise resolves to `Else`.

**Example**

```ts
type Yes = IfNullable<string | null, 'yes', 'no'>; // 'yes'
type No = IfNullable<string, 'yes', 'no'>; // 'no'
```

</td>
</tr>
<tr>
<td>

[IfNullish](conditions/IfNullish.md)

</td>
<td>

Resolves to `Then` if the type `T` is a nullish type, otherwise resolves to `Else`.

**Example**

```ts
type Yes = IfNullish<string | null | undefined, 'yes', 'no'>; // 'yes'
type No = IfNullish<string, 'yes', 'no'>; // 'no'
```

</td>
</tr>
<tr>
<td>

[IfNumber](conditions/IfNumber.md)

</td>
<td>

Resolves to `Then` if the type `T` is `number`, otherwise resolves to `Else`.

**Example**

```ts
type Yes = IfNumber<number, 'yes', 'no'>; // 'yes'
type No = IfNumber<string, 'yes', 'no'>; // 'no'
type YesOrNo = IfNumber<string | number, 'yes', 'no'>; // 'yes' | 'no'
```

</td>
</tr>
<tr>
<td>

[IfNumberLiteral](conditions/IfNumberLiteral.md)

</td>
<td>

Resolves to `Then` if the type `T` is number literal, otherwise resolves to `Else`.

**Example**

```ts
type Yes = IfNumberLiteral<11, 'yes', 'no'>; // 'yes'
type No = IfNumberLiteral<number, 'yes', 'no'>; // 'no'
type YesOrNo = IfNumberLiteral<string | 11, 'yes', 'no'>; // 'yes' | 'no'
```

</td>
</tr>
<tr>
<td>

[IfNumberDecimal](conditions/IfNumberDecimal.md)

</td>
<td>

Resolves to `Then` if the type `T` is decimal number literal, otherwise resolves to `Else`.

**Example**

```ts
type Yes = IfNumberDecimal<11.1, 'yes', 'no'>; // 'yes'
type No = IfNumberDecimal<11, 'yes', 'no'>; // 'no'
type YesOrNo = IfNumberDecimal<11.1 | 11, 'yes', 'no'>; // 'yes' | 'no'
```

</td>
</tr>
<tr>
<td>

[IfNumberInteger](conditions/IfNumberInteger.md)

</td>
<td>

Resolves to `Then` if the type `T` is integer number literal, otherwise resolves to `Else`.

**Example**

```ts
type Yes = IfNumberInteger<11, 'yes', 'no'>; // 'yes'
type No = IfNumberInteger<11.1, 'yes', 'no'>; // 'no'
type YesOrNo = IfNumberInteger<11 | 11.1, 'yes', 'no'>; // 'yes' | 'no'
```

</td>
</tr>
<tr>
<td>

[IfObject](conditions/IfObject.md)

</td>
<td>

Resolves to `Then` if the type `T` is `object`, otherwise resolves to `Else`.

**Example**

```ts
type Yes = IfObject<object, 'yes', 'no'>; // 'yes'
type No = IfObject<string, 'yes', 'no'>; // 'no'
type YesOrNo = IfObject<object | string, 'yes', 'no'>; // 'yes' | 'no'
```

</td>
</tr>
<tr>
<td>

[IfObjectLiteral](conditions/IfObjectLiteral.md)

</td>
<td>

Resolves to `Then` if the type `T` is object literal, otherwise resolves to `Else`.

**Example**

```ts
type Yes = IfObjectLiteral<{ a: 1 }, 'yes', 'no'>; // 'yes'
type No = IfObjectLiteral<object, 'yes', 'no'>; // 'no'
type YesOrNo = IfObjectLiteral<{ a: 1 } | object, 'yes', 'no'>; // 'yes' | 'no'
```

</td>
</tr>
<tr>
<td>

[IfObjectEmpty](conditions/IfObjectEmpty.md)

</td>
<td>

Resolves to `Then` if the type `T` is object empty, otherwise resolves to `Else`.

**Example**

```ts
// 'yes'
type Yes = IfObjectEmpty<{ [x: string]: never; }, 'yes', 'no'>;

// 'no'
type No = IfObjectEmpty<{ a: 1 }, 'yes', 'no'>;

// 'yes' | 'no'
type YesOrNo = IfObjectEmpty<{ [x: string]: never; } | { a: 1 }, 'yes', 'no'>;
```

</td>
</tr>
<tr>
<td>

[IfObjectArrayLike](conditions/IfObjectArrayLike.md)

</td>
<td>

Resolves to `Then` if the type `T` is array-like object, otherwise resolves to `Else`.

**Example**

```ts
// 'yes'
type Yes = IfObjectArrayLike<{ 0: number; 1: number; }, 'yes', 'no'>;

// 'no'
type No = IfObjectArrayLike<{ 0: number; id: number; }, 'yes', 'no'>;

// 'yes' | 'no'
type YesOrNo = IfObjectArrayLike<{ 0: number; 1: number; } | { 0: number; id: number; }, 'yes', 'no'>;
```

</td>
</tr>
<tr>
<td>

[IfOptionalProperty](conditions/IfOptionalProperty.md)

</td>
<td>

Resolves to `Then` if the type `T[Key]` is optional, otherwise resolves to `Else`.

**Example**

```ts
// 'yes'
type Yes = IfOptionalProperty<{ a?: string; }, 'a', 'yes', 'no'>;

// 'no'
type No = IfOptionalProperty<{ a: string; }, 'a', 'yes', 'no'>;

// 'yes' | 'no'
type YesOrNo = IfOptionalProperty<{ a?: string; } | { a: string; }, 'a', 'yes', 'no'>;

// never
type Never = IfOptionalProperty<{ a?: string }, 'b', 'yes', 'no'>;
```

</td>
</tr>
<tr>
<td>

[IfPositive](conditions/IfPositive.md)

</td>
<td>

Resolves to `Then` if the type `T` is positive, otherwise resolves to `Else`.

**Example**

```ts
type Yes = IfPositive<11 | 11n | '11' | '11n', 'yes', 'no'>; // 'yes'
type No = IfPositive<-11, 'yes', 'no'>; // 'no'
type YesOrNo = IfPositive<-11 | 11, 'yes', 'no'>; // 'yes' | 'no'
```

</td>
</tr>
<tr>
<td>

[IfPrimitive](conditions/IfPrimitive.md)

</td>
<td>

Resolves to `Then` if the type `T` is assignable to [\`Primitive\`](aliases/Primitive.md), otherwise resolves to `Else`.

**Example**

```ts
type Yes = IfPrimitive<string, 'yes', 'no'>; // 'yes'
type No = IfPrimitive<object, 'yes', 'no'>; // 'no'
type YesOrNo = IfPrimitive<string | object, 'yes', 'no'>; // 'yes' | 'no'
```

</td>
</tr>
<tr>
<td>

[IfPromise](conditions/IfPromise.md)

</td>
<td>

Resolves to `Then` if the type `T` is `Promise`, otherwise resolves to `Else`.

**Example**

```ts
type Yes = IfPromise<Promise<string>, 'yes', 'no'>; // 'yes'
type No = IfPromise<string, 'yes', 'no'>; // 'no'
type YesOrNo = IfPromise<Promise<string> | string, 'yes', 'no'>; // 'yes' | 'no'
```

</td>
</tr>
<tr>
<td>

[IfAsync](conditions/IfAsync.md)

</td>
<td>

Alias for [\`IfPromise\`](conditions/IfPromise.md).

</td>
</tr>
<tr>
<td>

[IfPropertyKey](conditions/IfPropertyKey.md)

</td>
<td>

Resolves to `Then` if the type `T` is [\`PropertyKey\`](#), otherwise resolves to `Else`.

**Example**

```ts
type Yes = IfPropertyKey<string, 'yes', 'no'>; // 'yes'
type No = IfPropertyKey<boolean, 'yes', 'no'>; // 'no'
type YesOrNo = IfPropertyKey<string | boolean, 'yes', 'no'>; // 'yes' | 'no'
```

</td>
</tr>
<tr>
<td>

[IfRequiredProperty](conditions/IfRequiredProperty.md)

</td>
<td>

Resolves to `Then` if the type `T[Key]` is required, otherwise resolves to `Else`.

**Example**

```ts
// 'yes'
type Yes = IfRequiredProperty<{ a: string; }, 'a', 'yes', 'no'>;

// 'no'
type No = IfRequiredProperty<{ a?: string; }, 'a', 'yes', 'no'>;

// 'yes' | 'no'
type YesOrNo = IfRequiredProperty<{ a: string; } | { a?: string; }, 'a', 'yes', 'no'>;

// never
type Never = IfRequiredProperty<{ a?: string }, 'b', 'yes', 'no'>;
```

</td>
</tr>
<tr>
<td>

[IfString](conditions/IfString.md)

</td>
<td>

Resolves to `Then` if the type `T` is `string`, otherwise resolves to `Else`.

**Example**

```ts
type Yes = IfString<string, 'yes', 'no'>; // 'yes'
type No = IfString<number, 'yes', 'no'>; // 'no'
type YesOrNo = IfString<string | number, 'yes', 'no'>; // 'yes' | 'no'
```

</td>
</tr>
<tr>
<td>

[IfStringLiteral](conditions/IfStringLiteral.md)

</td>
<td>

Resolves to `Then` if the type `T` is string literal, otherwise resolves to `Else`.

**Example**

```ts
type Yes = IfStringLiteral<'', 'yes', 'no'>; // 'yes'
type No = IfStringLiteral<string, 'yes', 'no'>; // 'no'
type YesOrNo = IfStringLiteral<'' | number, 'yes', 'no'>; // 'yes' | 'no'
```

</td>
</tr>
<tr>
<td>

[IfStringNumberLike](conditions/IfStringNumberLike.md)

</td>
<td>

Resolves to `Then` if the type `T` is number-like string literal, otherwise resolves to `Else`.

**Example**

```ts
type Yes = IfStringNumberLike<'11', 'yes', 'no'>; // 'yes'
type No = IfStringNumberLike<'hello', 'yes', 'no'>; // 'no'
type YesOrNo = IfStringNumberLike<'11' | 'hello', 'yes', 'no'>; // 'yes' | 'no'
```

</td>
</tr>
<tr>
<td>

[IfSymbol](conditions/IfSymbol.md)

</td>
<td>

Resolves to `Then` if the type `T` is `symbol`, otherwise resolves to `Else`.

**Example**

```ts
type Yes = IfSymbol<symbol, 'yes', 'no'>; // 'yes'
type No = IfSymbol<string, 'yes', 'no'>; // 'no'
type YesOrNo = IfSymbol<symbol | string, 'yes', 'no'>; // 'yes' | 'no'
```

</td>
</tr>
<tr>
<td>

[IfUndefinable](conditions/IfUndefinable.md)

</td>
<td>

Resolves to `Then` if the type `T` is an undefinable type, otherwise resolves to `Else`.

**Example**

```ts
type Yes = IfUndefinable<string | undefined, 'yes', 'no'>; // 'yes'
type No = IfUndefinable<string, 'yes', 'no'>; // 'no'
```

</td>
</tr>
<tr>
<td>

[IfUndefined](conditions/IfUndefined.md)

</td>
<td>

Resolves to `Then` if the type `T` is `undefined`, otherwise resolves to `Else`.

**Example**

```ts
type Yes = IfUndefined<undefined, 'yes', 'no'>; // 'yes'
type No = IfUndefined<string, 'yes', 'no'>; // 'no'
type YesOrNo = IfUndefined<string | undefined, 'yes', 'no'>; // 'yes' | 'no'
```

</td>
</tr>
<tr>
<td>

[IfUnion](conditions/IfUnion.md)

</td>
<td>

Resolves to `Then` if the type `T` is union, otherwise resolves to `Else`.

**Example**

```ts
type Yes = IfUnion<string | number, 'yes', 'no'>; // 'yes'
type No = IfUnion<string, 'yes', 'no'>; // 'no'
```

</td>
</tr>
<tr>
<td>

[IfUnknown](conditions/IfUnknown.md)

</td>
<td>

Resolves to `Then` if the type `T` is an `unknown` type, otherwise resolves to `Else`.

**Example**

```ts
type Yes = IfUnknown<unknown, 'yes', 'no'>; // 'yes'
type No = IfUnknown<string, 'yes', 'no'>; // 'no'
```

</td>
</tr>
<tr>
<td>

[IfVoid](conditions/IfVoid.md)

</td>
<td>

Resolves to `Then` if the type `T` is `void`, otherwise resolves to `Else`.

**Example**

```ts
type Yes = IfVoid<void, 'yes', 'no'>; // 'yes'
type No = IfVoid<string, 'yes', 'no'>; // 'no'
type YesOrNo = IfVoid<string | void, 'yes', 'no'>; // 'yes' | 'no'
```

</td>
</tr>
</tbody>
</table>
