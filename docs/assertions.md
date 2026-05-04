[typelab](README.md) / assertions

Handy TypeScript type checks for figuring out what a type is.
Includes helpers for things like arrays, objects, functions, primitives,
and special cases like null, undefined, union types, and more.

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

[IsAny](assertions/IsAny.md)

</td>
<td>

Checks if a given type `T` is an `any` type.

**Example**

```ts
type Valid = IsAny<any>; // true
type Invalid = IsAny<string>; // false
```

</td>
</tr>
<tr>
<td>

[IsArray](assertions/IsArray.md)

</td>
<td>

Checks if a given type `T` is an `Array` type.

**Example**

```ts
type Valid = IsArray<string[]>; // true
type Invalid = IsArray<string>; // false
```

</td>
</tr>
<tr>
<td>

[IsArrayWritable](assertions/IsArrayWritable.md)

</td>
<td>

Checks if a given type `T` is not readonly `Array` type.

**Example**

```ts
type Valid = IsArrayWritable<string[]>; // true
type Invalid = IsArrayWritable<readonly string[]>; // false
```

</td>
</tr>
<tr>
<td>

[IsArrayReadonly](assertions/IsArrayReadonly.md)

</td>
<td>

Checks if a given type `T` is readonly `Array` type.

**Example**

```ts
type Valid = IsArrayReadonly<readonly string[]>; // true
type Invalid = IsArrayReadonly<string[]>; // false
```

</td>
</tr>
<tr>
<td>

[IsTuple](assertions/IsTuple.md)

</td>
<td>

Checks if a given type `T` is a `Tuple` type.

**Example**

```ts
type Valid = IsTuple<[string]>; // true
type Invalid = IsTuple<string[]>; // false
```

</td>
</tr>
<tr>
<td>

[IsTupleWritable](assertions/IsTupleWritable.md)

</td>
<td>

Checks if a given type `T` is not readonly `Tuple` type.

**Example**

```ts
type Valid = IsTupleWritable<[string]>; // true
type Invalid1 = IsTupleWritable<readonly [string]>; // false
type Invalid2 = IsTupleWritable<string[]>; // false
```

</td>
</tr>
<tr>
<td>

[IsTupleReadonly](assertions/IsTupleReadonly.md)

</td>
<td>

Checks if a given type `T` is readonly `Tuple` type.

**Example**

```ts
type Valid = IsTupleReadonly<readonly [string]>; // true
type Invalid1 = IsTupleReadonly<[string]>; // false
type Invalid2 = IsTupleReadonly<readonly string[]>; // false
```

</td>
</tr>
<tr>
<td>

[IsBigInt](assertions/IsBigInt.md)

</td>
<td>

Checks if a given type `T` is a `bigint`.

**Example**

```ts
type Valid = IsBigInt<bigint>; // true
type Invalid = IsBigInt<number>; // false
```

</td>
</tr>
<tr>
<td>

[IsBigIntLiteral](assertions/IsBigIntLiteral.md)

</td>
<td>

Checks if a given type `T` is a `BigInt Literal` type.

**Example**

```ts
type Valid = IsBigIntLiteral<1n>; // true
type Invalid = IsBigIntLiteral<bigint>; // false
```

</td>
</tr>
<tr>
<td>

[IsBoolean](assertions/IsBoolean.md)

</td>
<td>

Checks if a given type `T` is a `boolean`.

**Example**

```ts
type Valid = IsBoolean<boolean>; // true
type Invalid = IsBoolean<string>; // false
```

</td>
</tr>
<tr>
<td>

[IsFalse](assertions/IsFalse.md)

</td>
<td>

Checks if a given type `T` is the literal `false`.

**Example**

```ts
type Valid = IsFalse<false>; // true
type Invalid = IsFalse<boolean>; // false
```

</td>
</tr>
<tr>
<td>

[IsFalsy](assertions/IsFalsy.md)

</td>
<td>

Checks if a given type `T` is [\`Falsy\`](aliases/Falsy.md).

**Example**

```ts
type Valid = IsFalsy<false | '' | 0 | 0n | null | undefined | void>; // true
type Invalid = IsFalsy<0 | 1>; // false
```

</td>
</tr>
<tr>
<td>

[IsTrue](assertions/IsTrue.md)

</td>
<td>

Checks if a given type `T` is the literal `true`.

**Example**

```ts
type Valid = IsTrue<true>;    // true
type Invalid = IsTrue<boolean>; // false
```

</td>
</tr>
<tr>
<td>

[IsTruthy](assertions/IsTruthy.md)

</td>
<td>

Checks if a given type `T` is not [\`Falsy\`](aliases/Falsy.md) or `never`.

**Example**

```ts
type Valid = IsTruthy<0 | 1>; // true
type Invalid = IsTruthy<0 | 1>; // false
```

</td>
</tr>
<tr>
<td>

[IsClass](assertions/IsClass.md)

</td>
<td>

Checks if a given type `T` is a `Class` type.

**Example**

```ts
class DummyClass {}
type Valid = IsClass<typeof DummyClass>; // true
type Invalid = IsClass<string>; // false
```

</td>
</tr>
<tr>
<td>

[IsEqual](assertions/IsEqual.md)

</td>
<td>

Check the type equality between `T1` and `T2`.

**Example**

```ts
type Equal = IsEqual<string, string>; // true
type NotEqual = IsEqual<string, ''>; // false
```

</td>
</tr>
<tr>
<td>

[IsNotEqual](assertions/IsNotEqual.md)

</td>
<td>

Check the type inequality between `T1` and `T2`.

[\`IsEqual\`](assertions/IsEqual.md) in reverse.

**Example**

```ts
type NotEqual = IsNotEqual<string, ''>; // true
type Equal = IsNotEqual<string, string>; // false
```

</td>
</tr>
<tr>
<td>

[IsExtends](assertions/IsExtends.md)

</td>
<td>

Type that checks if type `T1` extends type `T2`.

**Example**

```ts
type Extends = IsExtends<'', string>; // true
type NotExtends = IsExtends<string, ''>; // false
```

</td>
</tr>
<tr>
<td>

[IsNotExtends](assertions/IsNotExtends.md)

</td>
<td>

Type that checks if type `T1` **not** extends type `T2`.

[\`IsExtends\`](assertions/IsExtends.md) in reverse.

**Example**

```ts
type NotExtends = IsNotExtends<string, ''>; // true
type Extends = IsNotExtends<'', string>; // false
```

</td>
</tr>
<tr>
<td>

[IsAssignable](assertions/IsAssignable.md)

</td>
<td>

Alias for [\`IsExtends\`](assertions/IsExtends.md).

</td>
</tr>
<tr>
<td>

[IsNotAssignable](assertions/IsNotAssignable.md)

</td>
<td>

Alias for [\`IsNotExtends\`](assertions/IsNotExtends.md).

</td>
</tr>
<tr>
<td>

[IsExtendsMutually](assertions/IsExtendsMutually.md)

</td>
<td>

Type that checks if type `T1` extends type `T2` and type `T2` extends type `T1`.

**Example**

```ts
type Mutual = IsExtendsMutually<string, any>; // true
type NotMutual = IsExtendsMutually<string, ''>; // false
```

</td>
</tr>
<tr>
<td>

[IsNotExtendsMutually](assertions/IsNotExtendsMutually.md)

</td>
<td>

Type that checks if type `T1` **not** extends type `T2` or type `T2` **not** extends type `T1`.

**Example**

```ts
type NotMutual = IsNotExtendsMutually<string, ''>; // true
type Mutual = IsNotExtendsMutually<string, string>; // false
```

</td>
</tr>
<tr>
<td>

[IsAssignableMutually](assertions/IsAssignableMutually.md)

</td>
<td>

Alias for [\`IsExtendsMutually\`](assertions/IsExtendsMutually.md).

</td>
</tr>
<tr>
<td>

[IsNotAssignableMutually](assertions/IsNotAssignableMutually.md)

</td>
<td>

Alias for [\`IsNotExtendsMutually\`](assertions/IsNotExtendsMutually.md).

</td>
</tr>
<tr>
<td>

[IsExtendsEitherWay](assertions/IsExtendsEitherWay.md)

</td>
<td>

Type that checks if type `T1` extends type `T2` or type `T2` extends type `T1`.

**Example**

```ts
type Relate = IsExtendsEitherWay<string, ''>; // true
type NotRelate = IsExtendsEitherWay<string, number>; // false
```

</td>
</tr>
<tr>
<td>

[IsNotExtendsEitherWay](assertions/IsNotExtendsEitherWay.md)

</td>
<td>

Type that checks if type `T1` **not** extends type `T2` and type `T2` **not** extends type `T1`.

**Example**

```ts
type NotRelate = IsNotExtendsEitherWay<string, number>; // false
type Relate = IsNotExtendsEitherWay<string, ''>; // true
```

</td>
</tr>
<tr>
<td>

[IsAssignableEitherWay](assertions/IsAssignableEitherWay.md)

</td>
<td>

Alias for [\`IsExtendsEitherWay\`](assertions/IsExtendsEitherWay.md).

</td>
</tr>
<tr>
<td>

[IsNotAssignableEitherWay](assertions/IsNotAssignableEitherWay.md)

</td>
<td>

Alias for [\`IsNotExtendsEitherWay\`](assertions/IsNotExtendsEitherWay.md).

</td>
</tr>
<tr>
<td>

[IsFunction](assertions/IsFunction.md)

</td>
<td>

Checks if a given type `T` is a function type.

**Example**

```ts
type Valid = IsFunction<() => string>; // true
type Invalid = IsFunction<string>; // false
```

</td>
</tr>
<tr>
<td>

[IsFn](assertions/IsFn.md)

</td>
<td>

Alias for [\`IsFunction\`](assertions/IsFunction.md).

</td>
</tr>
<tr>
<td>

[IsAsyncFunction](assertions/IsAsyncFunction.md)

</td>
<td>

Checks if a given type `T` is an async function type.

**Example**

```ts
type Valid = IsAsyncFunction<() => Promise<string>>; // true
type Invalid = IsAsyncFunction<() => string>; // false
```

</td>
</tr>
<tr>
<td>

[IsAsyncFn](assertions/IsAsyncFn.md)

</td>
<td>

Alias for [\`IsAsyncFunction\`](assertions/IsAsyncFunction.md).

</td>
</tr>
<tr>
<td>

[IsNewableFunction](assertions/IsNewableFunction.md)

</td>
<td>

Checks if a given type `T` is a newable function type.

**Example**

```ts
type Valid = IsNewableFunction<new () => string>; // true
type Invalid = IsNewableFunction<() => string>; // false
```

</td>
</tr>
<tr>
<td>

[IsNewableFn](assertions/IsNewableFn.md)

</td>
<td>

Alias for [\`IsNewableFunction\`](assertions/IsNewableFunction.md).

</td>
</tr>
<tr>
<td>

[IsIntersected](assertions/IsIntersected.md)

</td>
<td>

Checks if type `T1` is intersected with type `T2`.

**Example**

```ts
type Intersected = IsIntersected<'a' | 'c', 'a' | 'b'>; // true
type NotIntersected = IsIntersected<'c', 'a' | 'b'>; // false
```

</td>
</tr>
<tr>
<td>

[IsNotIntersected](assertions/IsNotIntersected.md)

</td>
<td>

Checks if type `T1` is not intersected with type `T2`.

**Example**

```ts
type Intersected = IsIntersected<'a' | 'c', 'a' | 'b'>; // true
type NotIntersected = IsIntersected<'c', 'a' | 'b'>; // false
```

</td>
</tr>
<tr>
<td>

[IsNegative](assertions/IsNegative.md)

</td>
<td>

Checks if a given number `T` is negative.

**Example**

```ts
type Valid = IsNegative<-11 | -11n>; // true
type Invalid = IsNegative<11 | 11n>; // false
```

</td>
</tr>
<tr>
<td>

[IsNever](assertions/IsNever.md)

</td>
<td>

Checks if a given type `T` is a `never` type.

**Example**

```ts
type Valid = IsNever<never>; // true
type Invalid = IsNever<string>; // false
```

</td>
</tr>
<tr>
<td>

[IsNonNullish](assertions/IsNonNullish.md)

</td>
<td>

Checks if a given type `T` is a `{}` type.

**Example**

```ts
type Valid = IsNonNullish<{}>; // true
type Invalid = IsNonNullish<string>; // false
```

</td>
</tr>
<tr>
<td>

[IsNull](assertions/IsNull.md)

</td>
<td>

Checks if a given type `T` is a `null` type.

**Example**

```ts
type Valid = IsNull<{}>; // true
type Invalid = IsNull<string>; // false
```

</td>
</tr>
<tr>
<td>

[IsNullable](assertions/IsNullable.md)

</td>
<td>

Checks if a given type `T` has `null` type.

**Example**

```ts
type Valid = IsNullable<string | null>; // true
type Invalid = IsNullable<string>; // false
```

</td>
</tr>
<tr>
<td>

[IsNullish](assertions/IsNullish.md)

</td>
<td>

Checks if a given type `T` has `null` | `undefined` type.

**Example**

```ts
type Valid1 = IsNullish<string | null>; // true
type Valid2 = IsNullish<string | undefined>; // true
type Invalid = IsNullish<string>; // false
```

</td>
</tr>
<tr>
<td>

[IsNumber](assertions/IsNumber.md)

</td>
<td>

Checks if a given type `T` is a `number` type.

**Example**

```ts
type Valid = IsNumber<number>; // true
type Invalid = IsNumber<string>; // false
```

</td>
</tr>
<tr>
<td>

[IsNumberLiteral](assertions/IsNumberLiteral.md)

</td>
<td>

Checks if a given type `T` is a `Number Literal` type.

**Example**

```ts
type Valid = IsNumberLiteral<11>; // true
type Invalid = IsNumberLiteral<number>; // false
```

</td>
</tr>
<tr>
<td>

[IsNumberDecimal](assertions/IsNumberDecimal.md)

</td>
<td>

Checks if a given type `T` is a decimal number literal type.

**Example**

```ts
type Valid = IsNumberDecimal<11.1>; // true
type Invalid = IsNumberDecimal<11>; // false
```

</td>
</tr>
<tr>
<td>

[IsNumberInteger](assertions/IsNumberInteger.md)

</td>
<td>

Checks if a given type `T` is a integer number literal type.

**Example**

```ts
type Valid = IsNumberInteger<11>; // true
type Invalid = IsNumberInteger<11.1>; // false
```

</td>
</tr>
<tr>
<td>

[IsObject](assertions/IsObject.md)

</td>
<td>

Checks if a given type `T` is an `object` type.

**Example**

```ts
type Valid = IsObject<[]>; // true
type Invalid = IsObject<string>; // false
```

</td>
</tr>
<tr>
<td>

[IsObjectLiteral](assertions/IsObjectLiteral.md)

</td>
<td>

Checks if a given type `T` is an `ObjectLiteral` type.

**Example**

```ts
type Valid = IsObjectLiteral<{ a: number; b: string }>; // true
type Invalid = IsObjectLiteral<string[]>; // false
```

</td>
</tr>
<tr>
<td>

[IsObjectEmpty](assertions/IsObjectEmpty.md)

</td>
<td>

Checks if a given type `T` is an `Object Empty` type.

**Example**

```ts
type Valid = IsObjectEmpty<{ [x: string]: never }>; // true
type Invalid = IsObjectEmpty<{ a: string }>; // false
```

</td>
</tr>
<tr>
<td>

[IsObjectArrayLike](assertions/IsObjectArrayLike.md)

</td>
<td>

Checks if a given type `T` is an `Object Array Like` type.

**Example**

```ts
type Valid = IsObjectArrayLike<{ 0: number; 1: number }>; // true
type Invalid = IsObjectArrayLike<{ 0: number; a: number }>; // false
```

</td>
</tr>
<tr>
<td>

[IsOptionalProperty](assertions/IsOptionalProperty.md)

</td>
<td>

Determines whether the type of `T[Key]` is optional.

**Example**

```ts
type Valid = IsOptionalProperty<{ a?: string }, 'a'>; // true
type Invalid = IsOptionalProperty<{ a: string }, 'a'>; // false
type Never1 = IsOptionalProperty<{ a: string }, 'b'>; // never
type Never2 = IsOptionalProperty<{}, 'b'>; // never
type Never3 = IsOptionalProperty<undefined, 'b'>; // never
```

</td>
</tr>
<tr>
<td>

[IsPositive](assertions/IsPositive.md)

</td>
<td>

Checks if a given number `T` is positive.

**Example**

```ts
type Valid = IsPositive<11 | 11n>; // true
type Invalid = IsPositive<-11 | -11n>; // false
```

</td>
</tr>
<tr>
<td>

[IsPrimitive](assertions/IsPrimitive.md)

</td>
<td>

Checks if a given type `T` is a `Primitive` type.

**Example**

```ts
type Valid = IsPrimitive<string>; // true
type Invalid = IsPrimitive<object>; // false
```

</td>
</tr>
<tr>
<td>

[IsPromise](assertions/IsPromise.md)

</td>
<td>

Checks if a given type `T` is a `Promise` type.

**Example**

```ts
type Valid = IsPromise<Promise<string>>; // true
type Invalid = IsPromise<string>; // false
```

</td>
</tr>
<tr>
<td>

[IsAsync](assertions/IsAsync.md)

</td>
<td>

Alias for [\`IsPromise\`](assertions/IsPromise.md).

</td>
</tr>
<tr>
<td>

[IsPropertyKey](assertions/IsPropertyKey.md)

</td>
<td>

Checks if a given type `T` is a [\`PropertyKey\`](#) type.

**Example**

```ts
type Valid = IsPropertyKey<string>; // true
type Invalid = IsPropertyKey<bigint>; // false
```

</td>
</tr>
<tr>
<td>

[IsRequiredProperty](assertions/IsRequiredProperty.md)

</td>
<td>

Determines whether the type of `T[Key]` is required.

**Example**

```ts
type Valid = IsRequiredProperty<{ a: string }, 'a'>; // true
type Invalid = IsRequiredProperty<{ a?: string }, 'a'>; // false
type Never1 = IsRequiredProperty<{ a: string }, 'b'>; // never
type Never2 = IsRequiredProperty<{}, 'b'>; // never
type Never3 = IsRequiredProperty<undefined, 'b'>; // never
```

</td>
</tr>
<tr>
<td>

[IsString](assertions/IsString.md)

</td>
<td>

Checks if a given type `T` is a `string`.

**Example**

```ts
type Valid = IsString<string>; // true
type Invalid = IsString<number>; // false
```

</td>
</tr>
<tr>
<td>

[IsStringLiteral](assertions/IsStringLiteral.md)

</td>
<td>

Checks if a given type `T` is a `String Literal` type.

**Example**

```ts
type Valid = IsStringLiteral<'str'>; // true
type Invalid = IsStringLiteral<string>; // false
```

</td>
</tr>
<tr>
<td>

[IsSymbol](assertions/IsSymbol.md)

</td>
<td>

Checks if a given type `T` is a `symbol`.

**Example**

```ts
type Valid = IsSymbol<symbol>; // true
type Invalid = IsSymbol<string>; // false
```

</td>
</tr>
<tr>
<td>

[IsUndefinable](assertions/IsUndefinable.md)

</td>
<td>

Checks if a given type `T` has `undefined` type.

**Example**

```ts
type Valid = IsUndefinable<string | undefined>; // true
type Invalid = IsUndefinable<string>; // false
```

</td>
</tr>
<tr>
<td>

[IsUndefined](assertions/IsUndefined.md)

</td>
<td>

Checks if a given type `T` is `undefined`.

**Example**

```ts
type Valid = IsUndefined<undefined>; // true
type Invalid = IsUndefined<string>; // false
```

</td>
</tr>
<tr>
<td>

[IsUnion](assertions/IsUnion.md)

</td>
<td>

Checks if a given type `T` is union type.

**Example**

```ts
type Valid = IsUnion<string | number>; // true
type Invalid = IsUnion<string>; // false
```

</td>
</tr>
<tr>
<td>

[IsUnknown](assertions/IsUnknown.md)

</td>
<td>

Checks if a given type `T` is an `unknown` type.

**Example**

```ts
type Valid = IsUnknown<unknown>; // true
type Invalid = IsUnknown<string>; // false
```

</td>
</tr>
<tr>
<td>

[IsVoid](assertions/IsVoid.md)

</td>
<td>

Checks if a given type `T` is `void`.

**Example**

```ts
type Valid = IsVoid<void>; // true
type Invalid = IsVoid<string>; // false
```

</td>
</tr>
</tbody>
</table>
