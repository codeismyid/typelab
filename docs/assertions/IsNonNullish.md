[typelab](../README.md) / [assertions](../assertions.md) / IsNonNullish

```ts
type IsNonNullish<T> = IfNonNullish<T, true, false>;
```

Checks if a given type `T` is a `{}` type.

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

`true` if `T` is a `{}` type, `false` otherwise.

## Example

```ts
type Valid = IsNonNullish<{}>; // true
type Invalid = IsNonNullish<string>; // false
```
