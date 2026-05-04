[typelab](../README.md) / [assertions](../assertions.md) / IsBigInt

```ts
type IsBigInt<T> = _IsTrue<IfBigInt<T, true, false>>;
```

Checks if a given type `T` is a `bigint`.

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

`true` if `T` is a `bigint`, `false` otherwise.

## Example

```ts
type Valid = IsBigInt<bigint>; // true
type Invalid = IsBigInt<number>; // false
```
