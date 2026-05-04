[typelab](../README.md) / [assertions](../assertions.md) / IsFalse

```ts
type IsFalse<T> = _IsTrue<IfFalse<T, true, false>>;
```

Checks if a given type `T` is the literal `false`.

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

`true` if `T` is the literal `false`, `false` otherwise.

## Example

```ts
type Valid = IsFalse<false>; // true
type Invalid = IsFalse<boolean>; // false
```
