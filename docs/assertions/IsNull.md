[typelab](../README.md) / [assertions](../assertions.md) / IsNull

```ts
type IsNull<T> = _IsTrue<IfNull<T, true, false>>;
```

Checks if a given type `T` is a `null` type.

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

`true` if `T` is a `null` type, `false` otherwise.

## Example

```ts
type Valid = IsNull<{}>; // true
type Invalid = IsNull<string>; // false
```
