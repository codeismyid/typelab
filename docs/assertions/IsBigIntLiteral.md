[typelab](../README.md) / [assertions](../assertions.md) / IsBigIntLiteral

```ts
type IsBigIntLiteral<T> = _IsTrue<IfBigIntLiteral<T, true, false>>;
```

Checks if a given type `T` is a `BigInt Literal` type.

## Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`T`

</td>
<td>

The type to be checked.

</td>
</tr>
</tbody>
</table>

## Returns

`true` if `T` is a `BigInt Literal` type, `false` otherwise.

## Example

```ts
type Valid = IsBigIntLiteral<1n>; // true
type Invalid = IsBigIntLiteral<bigint>; // false
```
