[typelab](../README.md) / [assertions](../assertions.md) / IsUndefinable

```ts
type IsUndefinable<T> = IfUndefinable<T, true, false>;
```

Checks if a given type `T` has `undefined` type.

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

`true` if `T` has `undefined` type, `false` otherwise.

## Example

```ts
type Valid = IsUndefinable<string | undefined>; // true
type Invalid = IsUndefinable<string>; // false
```
