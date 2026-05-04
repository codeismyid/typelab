[typelab](../README.md) / [assertions](../assertions.md) / IsNumberLiteral

```ts
type IsNumberLiteral<T> = _IsTrue<IfNumberLiteral<T, true, false>>;
```

Checks if a given type `T` is a `Number Literal` type.

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

`true` if `T` is a `Number Literal` type, `false` otherwise.

## Example

```ts
type Valid = IsNumberLiteral<11>; // true
type Invalid = IsNumberLiteral<number>; // false
```
